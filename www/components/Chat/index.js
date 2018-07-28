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
import { Button } from 'components/Button'
import { Message, MessageFragment } from './Message'

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
  z-index: 3;
`
const EndOfChat = styled.span`
  float: left;
`
const ShowMoreButton = styled(Button)`
  flex-shrink: 0;
`

// GraphQL

const messagesQuery = gql`
  query LessonMessages($id: ID!, $endCursor: String, $startCursor: String) {
    lesson(id: $id) {
      id
      messagesConnection(last: 10, after: $endCursor, before: $startCursor) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          node {
            ...ChatMessage
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
  ${MessageFragment}
`
const createMessageMutation = gql`
  mutation createMessage($id: ID!, $text: String!) {
    createMessage(lessonId: $id, text: $text) {
      ...ChatMessage
    }
  }
  ${MessageFragment}
`

export class Chat extends React.Component {
  state = {
    message: '',
    startCursor: null,
    endCursor: null,
  }

  componentDidUpdate() {
    if (this.endOfChat) {
      this.scrollToBottom()
    }
  }

  scrollToBottom = () => {
    this.endOfChat.scrollIntoView({
      behavior: 'smooth',
    })
  }

  handleInputChange = e => {
    this.setState({ message: e.target.value })
  }

  handleCacheUpdate = (proxy, { data: { createMessage } }) => {
    const queryArgs = {
      query: messagesQuery,
      variables: {
        id: this.props.lessonId,
        cursor: this.state.endCursor,
      },
    }

    const data = proxy.readQuery(queryArgs)
    data.lesson.messagesConnection.edges.push({
      __typename: 'MessageEdge',
      node: createMessage,
    })
    proxy.writeQuery({
      ...queryArgs,
      data,
    })

    this.scrollToBottom()
  }

  handleSubmit = (mutate, data) => e => {
    if (e.keyCode === 13) {
      e.preventDefault()

      mutate({
        variables: {
          id: this.props.lessonId,
          text: this.state.message,
        },
        optimisticResponse: {
          __typename: 'Mutation',
          createMessage: {
            __typename: 'Message',
            id: -1,
            text: this.state.message,
            createdAt: new Date(),
            is_viewer_message: true,
            is_teacher_message: true,
            sender: { ...data.viewer.user },
          },
        },
        update: this.handleCacheUpdate,
      })

      this.setState({ message: '' })
    }
  }

  render() {
    return (
      <Query
        query={messagesQuery}
        variables={{ id: this.props.lessonId, cursor: this.state.endCursor }}
        // pollInterval={300}
        // notifyOnNetworkStatusChange
      >
        {({ networkStatus, data, fetchMore, updateQuery }) => {
          // console.log(networkStatus, data)

          switch (networkStatus) {
            case NetworkStatus.loading: {
              return <Loading />
            }

            case NetworkStatus.poll:
            case NetworkStatus.ready: {
              return (
                <Container>
                  <MessagesCol>
                    <ShowMoreButton onClick={() => {}} color="tertiary">
                      Show More
                    </ShowMoreButton>
                    {data.lesson.messagesConnection.edges.map(({ node }) => (
                      <Message key={node.id} node={node} />
                    ))}
                    <EndOfChat
                      innerRef={el => {
                        this.endOfChat = el
                      }}
                    />
                  </MessagesCol>
                  <TextareaRow>
                    <Mutation mutation={createMessageMutation}>
                      {(mutate, { loading, error }) => (
                        <ChatTextarea
                          type="text"
                          maxRows={2}
                          value={this.state.message}
                          onChange={this.handleInputChange}
                          onKeyDown={this.handleSubmit(mutate, data)}
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
