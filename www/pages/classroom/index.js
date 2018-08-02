import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { NetworkStatus } from 'apollo-client'
import styled from 'styled-components'
import moment from 'moment-timezone'

// Components

import { Navbar } from 'components/Navbar'
import { LessonCard, fragments } from 'components/LessonCard'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Player } from 'components/Player'
import { Text } from 'components/Text'
import { TextStyle } from 'components/TextStyle'
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
import { Lessons } from 'components/Lessons'

// Utils

import {
  colors,
  spacing,
  shadow,
  outline,
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
import iconUser from 'static/assets/icons/ui/user.svg'

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
        lessonsConnection {
          aggregate {
            count
          }
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

const teacherLessonsQuery = gql`
  query LessonQuery($id: ID!, $cursor: String) {
    lesson(id: $id) {
      id
      teacher {
        id
        name
        lessonsConnection(last: 8, after: $cursor) {
          pageInfo {
            endCursor
          }
          edges {
            node {
              ...LessonCard
            }
          }
          aggregate {
            count
          }
        }
      }
    }
  }
  ${fragments.card}
`

// ======================================================================================================
// LessonChat
// ======================================================================================================

const LessonChatCol = styled(FlexCol)`
  position: sticky;
  top: 0;
  z-index: 10;
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

class LessonChat extends React.Component {
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

// ======================================================================================================
// LessonInfo
// ======================================================================================================

const TabRow = styled(FlexRow)`
  flex-shrink: 0;
  border-bottom: 1px solid ${colors.grayLightest};
  box-shadow: ${colors.shadowBottomSmall};
`
const activeSideNavLinkStyles = () => `
  opacity: 1;
  color: ${colors.secondary};
  text-decoration: none;
  background: ${colors.grayLightest};
  cursor: pointer;
`
const NavButton = styled(Text)`
  display: flex;
  padding: ${spacing.regular} ${spacing.medium};
  margin: 0;
  color: ${colors.secondary};
  white-space: nowrap;
  text-decoration: none;
  opacity: ${opacity};
  &:hover {
    ${activeSideNavLinkStyles()};
  }
  ${({ active }) => (active ? activeSideNavLinkStyles() : null)};
`
const NavIcon = styled(Icon)`
  margin-right: ${spacing.small};
  margin-top: -2px;
`
const CardRow = styled(FlexRow)`
  align-items: stretch;
  flex-shrink: 0;
  padding: ${spacing.medium};
  margin-bottom: ${spacing.xxlarge};
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
  margin-bottom: ${spacing.medium};
  &:last-child {
    margin-bottom: 0;
  }
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
const LoadingRow = styled(FlexRow)`
  justify-content: center;
  padding: ${spacing.medium};
  ${outline()};
`

class LessonInfo extends React.Component {
  state = {
    info: true,
    profile: false,
    lessons: false,
    related: false,
  }

  render() {
    const { data, lessonId } = this.props
    return (
      <React.Fragment>
        <TabRow>
          <NavButton
            onClick={() => {
              this.setState({ info: true, profile: false, lessons: false })
            }}
            active={this.state.info}
            size="small"
            weight="bold"
          >
            <NavIcon src={iconInformation} />
            About
          </NavButton>
          <NavButton
            onClick={() => {
              this.setState({ info: false, profile: true, lessons: false })
            }}
            active={this.state.profile}
            size="small"
            weight="bold"
          >
            <NavIcon src={iconUser} />
            Profile
          </NavButton>
          <NavButton
            onClick={() => {
              this.setState({ info: false, profile: false, lessons: true })
            }}
            active={this.state.lessons}
            size="small"
            weight="bold"
          >
            <NavIcon src={iconVideo} />
            Lessons
            <TextStyle margin="0 0 0 3px" color="gray">
              {data.lesson.teacher.lessonsConnection.aggregate.count}
            </TextStyle>
          </NavButton>
        </TabRow>

        {this.state.info && (
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
                  <EmptyState src={iconFileGray} value="Nothing to see here!" />
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
        )}

        {this.state.profile && (
          <CardRow>
            <CardColLeft>
              <IconHeader
                src={iconInformation}
                value={`About ${data.lesson.teacher.name}`}
              />
              <CardBody>
                <CardLabel>
                  Subscribers
                  <Text margin="5px 0">123</Text>
                </CardLabel>
                <CardLabel>
                  Bio
                  <Text margin="5px 0">{data.lesson.teacher.bio}</Text>
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
        )}

        {this.state.lessons && (
          <CardRow>
            <Query
              query={teacherLessonsQuery}
              variables={{ id: lessonId }}
              notifyOnNetworkStatusChange
            >
              {({ networkStatus, data, fetchMore }) => {
                switch (networkStatus) {
                  case NetworkStatus.loading: {
                    return (
                      <LoadingRow>
                        <Loading color="tertiary" />
                      </LoadingRow>
                    )
                  }
                  case NetworkStatus.ready: {
                    return (
                      <Lessons
                        icon={iconVideo}
                        label={`Lessons`}
                        networkStatus={networkStatus}
                        data={data.lesson.teacher.lessonsConnection.edges}
                        fetchMore={fetchMore}
                      />
                    )
                  }
                }
              }}
            </Query>
          </CardRow>
        )}
      </React.Fragment>
    )
  }
}

// ======================================================================================================
// LivePage
// ======================================================================================================

const LessonRow = styled(FlexRow)`
  align-items: flex-start;
  overflow: hidden;
`
const LessonBodyCol = styled(FlexCol)`
  flex: 1;
  height: ${HEIGHT_MINUS_NAVBAR};
  overflow: auto;
`
const CLASS_HEADER_HEIGHT = '127px'
const LessonPlayer = styled(Player)`
  min-height: calc(${HEIGHT_MINUS_NAVBAR} - ${CLASS_HEADER_HEIGHT});
`
const LessonHeader = styled(FlexRow)`
  flex-shrink: 0;
  position: sticky;
  bottom: 0;
  z-index: 5;
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

class LivePage extends React.Component {
  static async getInitialProps(ctx) {
    if (!ctx.query.lessonId) {
      return {}
    } else {
      return { lessonId: ctx.query.lessonId, username: ctx.query.username }
    }
  }

  render() {
    const { lessonId, username } = this.props
    return (
      <>
        <Navbar activePage="lesson" />
        <Query
          query={lessonQuery}
          variables={{
            id: lessonId,
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
                      <LessonInfo data={data} lessonId={lessonId} />

                      <LessonHeader>
                        <LessonroomThumbnail
                          size="xlarge"
                          src={data.lesson.teacher.picture.url}
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
                            <LessonMetaItem
                              color="gray"
                              weight="bold"
                              size="small"
                            >
                              <LessonIcon src={userGrayIcon} />
                              {0} Students
                            </LessonMetaItem>
                            <LessonMetaItem
                              color="gray"
                              weight="bold"
                              size="small"
                            >
                              <LessonIcon src={calendarGrayIcon} />
                              {moment(data.lesson.schedule).format('M/D/YY')}
                            </LessonMetaItem>
                            <LessonMetaItem
                              color="gray"
                              weight="bold"
                              size="small"
                            >
                              <LessonIcon src={clockGrayIcon} />
                              {moment(data.lesson.schedule)
                                .tz('America/New_York')
                                .format('LT z')}
                            </LessonMetaItem>
                          </FlexRow>
                        </LessonMeta>
                      </LessonHeader>
                    </LessonBodyCol>

                    <LessonChat lessonId={lessonId} />
                  </LessonRow>
                )
              }

              default: {
                return null
              }
            }
          }}
        </Query>
      </>
    )
  }
}

export default LivePage
