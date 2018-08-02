import React from 'react'
import gql from 'graphql-tag'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import { NetworkStatus } from 'apollo-client'
import styled from 'styled-components'
import moment from 'moment-timezone'

// Components

import { LessonNavigation } from 'pages/live/components/TabNav'
import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'
import { LessonCard, fragments } from 'components/LessonCard'
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
import { Label } from 'components/Label'
import { File } from 'components/File'
import { EmptyState } from 'components/EmptyState'
import { Thumbnail } from 'components/Thumbnail'
import { Chat } from 'components/Chat'

// Utils

import {
  colors,
  spacing,
  shadow,
  HEIGHT_MINUS_NAVBAR,
  transition,
  opacity,
} from 'utils/theme'

// Assets

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
import iconHeart from 'static/assets/icons/ui/heart.svg'
import iconTwitter from 'static/assets/icons/ui/twitter.svg'
import iconInstagram from 'static/assets/icons/ui/instagram.svg'

// GraphQL

const lessonQuery = gql`
  query LessonQuery($id: ID!) {
    lesson(id: $id) {
      id
      name
      schedule
      description
      thumbnail {
        id
        url
      }
      # vod {
      #   id
      #   url
      # }
      teacher {
        id
        name
        username
        picture {
          id
          url
        }
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
    }
  }
`

// Styles

const LessonRow = styled(FlexRow)`
  align-items: flex-start;
  overflow: hidden;
`
const LessonBodyCol = styled(FlexCol)`
  flex: 1;
  height: ${HEIGHT_MINUS_NAVBAR};
  overflow: auto;
`
const LessonChatCol = styled(FlexCol)`
  position: sticky;
  top: 0;
  z-index: 2;
  width: ${props => (props.open ? '384px' : '50px')};
  height: ${HEIGHT_MINUS_NAVBAR};
  background: ${colors.white};
  border-left: 1px solid ${colors.grayLighter};
  box-shadow: -15px 0 30px 0 rgba(66, 75, 84, 0.1);
  transition: ${transition};
`
const LessonChatContent = styled(FlexCol)`
  min-height: ${HEIGHT_MINUS_NAVBAR};
  max-height: ${HEIGHT_MINUS_NAVBAR};
  padding-bottom: calc(66px + ${spacing.medium});
`
const CLASS_HEADER_HEIGHT = '127px'
const LessonPlayer = styled(Player)`
  min-height: calc(${HEIGHT_MINUS_NAVBAR} - ${CLASS_HEADER_HEIGHT});
`
const LessonHeader = styled(FlexRow)`
  flex-shrink: 0;
  position: sticky;
  bottom: 0;
  padding: ${spacing.regular} ${spacing.medium};
  background: ${colors.white};
  border-top: 1px solid ${colors.grayLighter};
  box-shadow: 0 -15px 30px 0 rgba(66, 75, 84, 0.1);
`
const LessonroomThumbnail = styled(Thumbnail)`
  margin-right: ${spacing.small};
`
const LessonTitle = styled(Header)`
  position: relative;
  margin-bottom: ${spacing.xsmall};
`
const LessonMeta = styled(FlexCol)`
  width: initial;
`
const LessonMetaItem = styled(Text)`
  display: flex;
  align-items: center;
  margin-right: ${spacing.small};
  margin-top: 2px;
`
const LessonIcon = styled(Icon)`
  height: 16px;
  margin-top: -2px;
  margin-right: ${spacing.xsmall};
`
const CardRow = styled(FlexRow)`
  align-items: stretch;
  flex-shrink: 0;
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
const SocialLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: ${spacing.regular};
  opacity: ${opacity};
  &:hover {
    opacity: 1;
    background: ${colors.grayLightest};
    text-decoration: none;
  }
`
const SocialIcon = styled(Icon)`
  height: 18px;
  margin-top: -2px;
  margin-right: ${spacing.small};
`
const ActionHeaderRow = styled(FlexRow)`
  flex-shrink: 0;
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

// Elements

class ActionCol extends React.Component {
  state = {
    open: true,
    chat: true,
  }

  handleToggleOpen = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <LessonChatCol open={this.state.open}>
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

        {this.state.open && (
          <LessonChatContent>
            <Chat lessonId={this.props.lessonId} />
          </LessonChatContent>
        )}
      </LessonChatCol>
    )
  }
}

const Body = withRouter(({ router, lessonId, username }) => (
  <Query
    query={lessonQuery}
    variables={{
      id: router.query.lessonId,
    }}
    notifyOnNetworkStatusChange
  >
    {({ networkStatus, data }) => {
      switch (networkStatus) {
        case NetworkStatus.ready: {
          console.log(data)
          return (
            <LessonRow>
              <LessonBodyCol>
                <LessonPlayer />

                <LessonNavigation activeSection="" />

                {/*CLASS INFORMATION*/}
                <CardRow>
                  <CardColLeft>
                    <IconHeader src={iconInformation} value="Information" />
                    <CardBody>
                      <CardLabel>
                        Description
                        <Text margin="5px 0">{data.lesson.description}</Text>
                      </CardLabel>
                    </CardBody>
                  </CardColLeft>
                  <CardCol>
                    <IconHeader src={iconArchive} value="Files" />
                    <FlexCol>
                      {data.lesson.filesConnection.aggregate.count === 0 ? (
                        <EmptyState
                          src={iconFileGray}
                          value="Nothing to see here!"
                        />
                      ) : (
                        data.lesson.filesConnection.edges.map(({ node }) => (
                          <File
                            key={node.id}
                            name={node.name}
                            url={`/TODO/${node.secret}`}
                          />
                        ))
                      )}
                    </FlexCol>
                  </CardCol>
                </CardRow>

                {/*USER PROFILE*/}
                <CardRow>
                  <CardColLeft>
                    <IconHeader
                      src={iconInformation}
                      value={`About USER NAME`}
                    />
                    <CardBody>
                      <CardLabel>
                        Subscribers
                        <Text margin="5px 0">123</Text>
                      </CardLabel>
                      <CardLabel>
                        Description
                        <Text margin="5px 0">USER PROFILE DESCRIPTION/BIO</Text>
                      </CardLabel>
                    </CardBody>
                  </CardColLeft>
                  <CardCol>
                    <IconHeader src={iconHeart} value="Social" />
                    <FlexCol>
                      <SocialLink
                        target="_blank"
                        href="https://twitter.com/naval"
                        size="small"
                        weight="bold"
                        color="secondary"
                      >
                        <SocialIcon src={iconTwitter} />
                        TWITTER HANDLE
                      </SocialLink>
                    </FlexCol>
                  </CardCol>
                </CardRow>

                {/*
                <RelatedRow>
                  <CardCol>
                    <IconHeader src={iconVideo} value="Related Lessones" />
                    <RelatedBody>
                      {data.lesson.classroom.classesConnection.edges.map(
                        ({ node }) => (
                          <LessonCardMedium
                            node={node}
                            key={node.id}
                            href={`/class/${node.id}`}
                            teachers={
                              data.lesson.classroom.teachersConnection.edges
                            }
                          />
                        ),
                      )}
                    </RelatedBody>
                  </CardCol>
                </RelatedRow>
                    */}

                <LessonHeader>
                  <LessonroomThumbnail
                    size="xlarge"
                    src="http://www.bistiproofpage.com/wp-content/uploads/2018/04/cute-profile-pics-for-whatsapp-images.png"
                  />
                  <LessonMeta>
                    <Link
                      key={data.lesson.teacher.id}
                      href={`/${data.lesson.teacher.username}`}
                      size="small"
                      weight="bold"
                    >
                      {data.lesson.teacher.name}
                    </Link>
                    <LessonTitle>{data.lesson.name}</LessonTitle>
                    <FlexRow>
                      <LessonMetaItem color="gray" weight="bold" size="small">
                        <LessonIcon src={userGrayIcon} />
                        {0} Students
                      </LessonMetaItem>
                      <LessonMetaItem color="gray" weight="bold" size="small">
                        <LessonIcon src={calendarGrayIcon} />
                        {moment(data.lesson.schedule).format('M/D/YY')}
                      </LessonMetaItem>
                      <LessonMetaItem color="gray" weight="bold" size="small">
                        <LessonIcon src={clockGrayIcon} />
                        {moment(data.lesson.schedule)
                          .tz('America/New_York')
                          .format('LT z')}
                      </LessonMetaItem>
                    </FlexRow>
                  </LessonMeta>
                </LessonHeader>
              </LessonBodyCol>

              <ActionCol lessonId={router.query.lessonId} />
            </LessonRow>
          )
        }

        default: {
          return null
        }
      }
    }}
  </Query>
))

class LivePage extends React.Component {
  static async getInitialProps(ctx) {
    console.log(ctx.query)
    if (!ctx.query.lessonId) {
      return {}
    } else {
      return { lessonId: ctx.query.lessonId, username: ctx.query.username }
    }
  }

  render() {
    return (
      <>
        <Navbar activePage="lesson" />
        <Body {...this.props} />
      </>
    )
  }
}
// <Footer />

export default LivePage
