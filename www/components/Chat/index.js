import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { NetworkStatus } from 'apollo-client'

// Components

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Textarea } from 'components/Textarea'
import { Loading } from 'components/Loading'
import { Message } from './Message'

// Utils

import { colors, spacing } from 'utils/theme'

const Container = styled(FlexCol)`
  min-width: 256px;
  border-left: 1px solid ${colors.grayLighter};
`
const MessagesCol = styled(FlexCol)`
  overflow: auto;
`
const TextareaRow = styled(FlexRow)`
  min-height: 76px;
  padding: ${spacing.regular};
  box-sizing: border-box;
`
const ChatTextarea = styled(Textarea)`
  width: 100%;
  background: white;
  resize: none;
  z-index: 10;
`

// GraphQL

const messagesQuery = gql`
  query LessonMessages($id: ID!) {
    lesson(id: $id) {
      id
      messagesConnection(last: 30) {
        edges {
          node {
            id
            createdAt
            text
            is_viewer_message
            is_teacher_message
            sender {
              id
              name
              username
              picture {
                id
              }
            }
          }
        }
      }
    }
    viewer {
      user {
        id
        name
        username
        picture {
          id
        }
      }
    }
  }
`
const createMessageMutation = gql`
  mutation createMessage($id: ID!, $text: String!) {
    createMessage(lessonId: $id, text: $text) {
      id
      text
      createdAt
      is_viewer_message
    }
  }
`

export class Chat extends React.Component {
  static propTypes = {
    lessonId: PropTypes.string.isRequired,
  }

  state = {
    message: '',
  }

  handleSubmit = e => {}

  handleInputChange = e => {
    this.setState({ message: e.target.value })
  }

  handleEnterKey = (submit, refetch) => e => {
    if (e.keyCode === 13) {
      e.preventDefault()
      submit()
      refetch()
      this.setState({ message: '' })
    }
  }

  render() {
    return (
      <Query
        query={messagesQuery}
        variables={{ id: this.props.lessonId }}
        // pollInterval={300}
        notifyOnNetworkStatusChange
      >
        {({ networkStatus, data, refetch }) => {
          console.log(networkStatus)
          switch (networkStatus) {
            case NetworkStatus.loading: {
              return <Loading />
            }

            case NetworkStatus.poll:
            case NetworkStatus.refetch:
            case NetworkStatus.ready: {
              console.log(data)
              return (
                <Container>
                  <MessagesCol>
                    {data.lesson.messagesConnection.edges.map(({ node }) => (
                      <Message key={node.id} node={node} />
                    ))}
                  </MessagesCol>
                  <TextareaRow>
                    <Mutation
                      mutation={createMessageMutation}
                      variables={{
                        id: this.props.lessonId,
                        text: this.state.message,
                      }}
                      optimisticResponse={{
                        __typename: 'Mutation',
                        createMessage: {
                          __typename: 'MessageEdge',
                          node: {
                            id: -1,
                            text: this.state.message,
                            createdAt: new Date(),
                            is_viewer_message: true,
                            is_teacher_message: true,
                            sender: data.viewer.user,
                            __typename: 'Message',
                          },
                        },
                      }}
                      update={(proxy, { data: { createMessage } }) => {
                        const data = proxy.readQuery({
                          query: messagesQuery,
                          variables: { id: this.props.lessonId },
                        })
                        console.log(createMessage)
                        data.lesson.messagesConnection.edges.push(createMessage)
                        console.log(data.lesson.messagesConnection)
                        proxy.writeQuery({
                          query: messagesQuery,
                          data,
                        })
                      }}
                    >
                      {(submit, { loading, error, data }) => (
                        <ChatTextarea
                          type="text"
                          maxRows={2}
                          value={this.state.message}
                          onChange={this.handleInputChange}
                          onKeyDown={this.handleEnterKey(submit, refetch)}
                        />
                      )}
                    </Mutation>
                  </TextareaRow>
                </Container>
              )
            }
            default: {
              return null
            }
          }
        }}
      </Query>
    )
  }
}
