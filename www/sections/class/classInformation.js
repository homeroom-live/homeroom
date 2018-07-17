import React from 'react'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import moment from 'moment-timezone'

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Player } from 'components/Player'
import { Text } from 'components/Text'
import { Link } from 'components/Link'
import { Button } from 'components/Button'
import { IconHeader } from 'components/IconHeader'
import { Header } from 'components/Header'
import { Icon } from 'components/Icon'
import { Loading } from 'components/Loading'
import { ProfileLinks } from 'components/ProfileLinks'
import { ClassCardMedium } from 'components/ClassCard'
import { Label } from 'components/Label'
import { File } from 'components/File'
import { EmptyState } from 'components/EmptyState'
import { Thumbnail } from 'components/Thumbnail'

import {
  colors,
  spacing,
  shadow,
  HEIGHT_MINUS_NAVBAR,
  transition,
  opacity,
} from 'utils/theme'
import { NETWORK_STATUS } from 'utils/constants'
import userGrayIcon from 'static/assets/icons/ui/user-gray.svg'
import clockGrayIcon from 'static/assets/icons/ui/clock-gray.svg'
import calendarGrayIcon from 'static/assets/icons/ui/calendar-gray.svg'
import iconInformation from 'static/assets/icons/ui/information.svg'
import iconArchive from 'static/assets/icons/ui/archive.svg'
import iconFileGray from 'static/assets/icons/ui/file-gray.svg'
import iconVideo from 'static/assets/icons/ui/video.svg'
import iconPlusCircle from 'static/assets/icons/ui/plus-circle.svg'
import iconMinusCircle from 'static/assets/icons/ui/minus-circle.svg'
import iconChat from 'static/assets/icons/ui/chat.svg'

// GraphQL

const classQuery = gql`
  query ClassQuery($classId: ID!) {
    class(id: $classId) {
      id
      name
      description
      price
      picture {
        id
        url
      }
      schedule
      live
      duration
      video {
        id
        url
      }
      vod {
        id
        url
      }
      filesConnection {
        edges {
          node {
            id
            name
            url
          }
        }
        aggregate {
          count
        }
      }
      classroom {
        id
        name
        classesConnection(last: 3) {
          edges {
            node {
              id
              name
              description
              price
              picture {
                id
                url
              }
              schedule
              live
              duration
              video {
                id
                url
              }
              vod {
                id
                url
              }
            }
          }
        }
        teachersConnection {
          edges {
            node {
              id
              name
            }
          }
        }
      }
      messagesConnection {
        aggregate {
          count
        }
        edges {
          node {
            id
            text
            # sender {
            #   id
            #   name
            # }
          }
        }
      }
    }
  }
`

// Components

const ClassRow = styled(FlexRow)`
  align-items: flex-start;
`
const ClassBodyCol = styled(FlexCol)`
  flex: 1;
  min-height: 100vh;
`
const ClassChatCol = styled(FlexCol)`
  position: sticky;
  top: 0;
  z-index: 2;
  width: ${props => (props.open ? '384px' : '50px')};
  min-height: 100vh;
  background: ${colors.white};
  border-left: 1px solid ${colors.grayLighter};
  box-shadow: -15px 0 30px 0 rgba(66, 75, 84, 0.1);
  transition: ${transition};
`
const ClassChatContent = styled(FlexCol)`
  min-height: ${HEIGHT_MINUS_NAVBAR};
`
const ClassHeader = styled(FlexRow)`
  position: sticky;
  bottom: 0;
  z-index: 3;
  margin-top: auto;
  padding: ${spacing.regular} ${spacing.large};
  background: ${colors.white};
  border-top: 1px solid ${colors.grayLighter};
  box-shadow: 0 -15px 30px 0 rgba(66, 75, 84, 0.1);
`
const ClassroomThumbnail = styled(Thumbnail)`
  margin-right: ${spacing.small};
`
const ClassTitle = styled(Header)`
  position: relative;
  margin-bottom: ${spacing.xsmall};
`
const ClassMeta = styled(FlexCol)`
  width: initial;
`
const ClassMetaItem = styled(Text)`
  display: flex;
  align-items: center;
  margin-right: ${spacing.small};
  margin-top: 2px;
`
const ClassIcon = styled(Icon)`
  height: 16px;
  margin-top: -2px;
  margin-right: ${spacing.xsmall};
`
const SubscribeButton = styled(Button)`
  margin-left: auto;
`
const CardRow = styled(FlexRow)`
  align-items: flex-start;
  padding: ${spacing.medium};
`
const CardCol = styled(FlexCol)`
  ${shadow()};
  height: 100%;
`
const CardColLeft = styled(CardCol)`
  margin-right: ${spacing.medium};
`
const CardBody = styled(FlexCol)`
  padding: ${spacing.regular};
`
const RelatedRow = styled(FlexRow)`
  padding: ${spacing.medium};
  padding-top: 0;
`
const RelatedBody = styled(FlexRow)``
const CardLabel = styled(Label)`
  margin: 0;
`
const ActionHeaderRow = styled(FlexRow)`
  padding: ${spacing.regular};
  border-bottom: 1px solid ${colors.grayLighter};
  opacity: ${props => (props.active ? 1 : opacity)};
  transition: ${transition};
  cursor: pointer;
  &:hover {
    opacity: 1;
    background: ${colors.grayLightest};
  }
`
const ActionHeaderIcon = styled(Icon)`
  margin-right: ${spacing.small};
`

class ActionCol extends React.Component {
  state = {
    open: true,
    chat: true,
  }
  handleToggleOpen = () =>
    this.setState({
      open: !this.state.open,
    })

  render() {
    return (
      <ClassChatCol open={this.state.open}>
        <ActionHeaderRow onClick={this.handleToggleOpen}>
          <ActionHeaderIcon
            src={this.state.open ? iconMinusCircle : iconPlusCircle}
          />
          {this.state.open && (
            <Text size="small" weight="bold" margin="0">
              Hide
            </Text>
          )}
        </ActionHeaderRow>
        <ActionHeaderRow active={this.state.chat}>
          <ActionHeaderIcon src={iconChat} />
          {this.state.open && (
            <Text size="small" weight="bold" margin="0">
              Chat
            </Text>
          )}
        </ActionHeaderRow>
        <ClassChatContent />
      </ClassChatCol>
    )
  }
}

const testData = {
  files: [
    {
      node: {
        id: '123',
        name: 'Secret_Access_Codez',
        secret: '123',
      },
    },
    {
      node: {
        id: '123',
        name: 'Secret_Access_Codez',
        secret: '123',
      },
    },
  ],
}

export const ClassInformation = withRouter(({ router }) => (
  <Query
    query={classQuery}
    variables={{ classId: router.query.classId }}
    notifyOnNetworkStatusChange
  >
    {({ networkStatus, data }) => {
      switch (networkStatus) {
        case NETWORK_STATUS.LOADING: {
          return <Loading />
        }
        case NETWORK_STATUS.READY: {
          return (
            <ClassRow>
              <ClassBodyCol>
                <Player />

                <CardRow>
                  <CardColLeft>
                    <IconHeader src={iconInformation} value="Information" />
                    <CardBody>
                      <CardLabel>
                        Description
                        <Text margin="5px 0">{data.class.description}</Text>
                      </CardLabel>
                    </CardBody>
                  </CardColLeft>
                  <CardCol>
                    <IconHeader src={iconArchive} value="Files" />
                    <FlexCol>
                      {false &&
                        data.class.filesConnection.edges.length === 0 && (
                          <EmptyState
                            src={iconFileGray}
                            value="This class has no files!"
                          />
                        )}
                      {testData.files.map(({ node }) => (
                        // data.class.filesConnection.edges.map(({ node }) => (
                        <File
                          key={node.id}
                          name={node.name}
                          url={`/TODO/${node.secret}`}
                        />
                      ))}
                    </FlexCol>
                  </CardCol>
                </CardRow>

                <RelatedRow>
                  <CardCol>
                    <IconHeader src={iconVideo} value="Related Classes" />
                    <RelatedBody>
                      {data.class.classroom.classesConnection.edges.map(
                        ({ node }) => (
                          <ClassCardMedium
                            node={node}
                            key={node.id}
                            href={`/class/${node.id}`}
                            teachers={
                              data.class.classroom.teachersConnection.edges
                            }
                          />
                        ),
                      )}
                    </RelatedBody>
                  </CardCol>
                </RelatedRow>

                <ClassHeader>
                  <ClassroomThumbnail
                    size="xlarge"
                    src="http://www.bistiproofpage.com/wp-content/uploads/2018/04/cute-profile-pics-for-whatsapp-images.png"
                  />
                  <ClassMeta>
                    <ProfileLinks
                      users={data.class.classroom.teachersConnection.edges}
                    />
                    <ClassTitle>{data.class.name}</ClassTitle>
                    <FlexRow>
                      <ClassMetaItem color="gray" weight="bold" size="small">
                        <ClassIcon src={userGrayIcon} />
                        {0} Students
                      </ClassMetaItem>
                      <ClassMetaItem color="gray" weight="bold" size="small">
                        <ClassIcon src={calendarGrayIcon} />
                        {moment(data.class.schedule).format('M/D/YY')}
                      </ClassMetaItem>
                      <ClassMetaItem color="gray" weight="bold" size="small">
                        <ClassIcon src={clockGrayIcon} />
                        {moment(data.class.schedule)
                          .tz('America/New_York')
                          .format('LT z')}
                      </ClassMetaItem>
                    </FlexRow>
                  </ClassMeta>
                </ClassHeader>
              </ClassBodyCol>
              <ActionCol />
            </ClassRow>
          )
        }
        default: {
          return null
        }
      }
    }}
  </Query>
))
