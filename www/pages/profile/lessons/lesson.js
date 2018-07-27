import React from 'react'
import { NetworkStatus } from 'apollo-client'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import moment from 'moment-timezone'

import { redirect } from 'lib/redirect'

// Components

import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'
import { SideNav } from 'components/SideNav'
import { Loading } from 'components/Loading'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Breadcrumb } from 'components/Breadcrumb'
import { Text } from 'components/Text'
import { Header } from 'components/Header'
import { Icon } from 'components/Icon'
import { Link } from 'components/Link'
import { Button } from 'components/Button'
import { Player } from 'components/Player'
import { FilePicker } from 'components/FilePicker'
import { IconHeader } from 'components/IconHeader'
import { Label } from 'components/Label'
import { Toggle } from 'components/Toggle'
import { Input } from 'components/Input'
import { Textarea } from 'components/Textarea'
import { DatePicker } from 'components/DatePicker'
import { Chat } from 'components/Chat'

// Icons

import userGrayIcon from 'static/assets/icons/ui/user-gray.svg'
import clockGrayIcon from 'static/assets/icons/ui/clock-gray.svg'
import calendarGrayIcon from 'static/assets/icons/ui/calendar-gray.svg'
import iconVideo from 'static/assets/icons/ui/video.svg'
import iconChat from 'static/assets/icons/ui/chat.svg'
import iconHelpWhite from 'static/assets/icons/ui/help-white.svg'
import iconInformation from 'static/assets/icons/ui/information.svg'
import iconFile from 'static/assets/icons/ui/file.svg'

// HOCs

import { EditableComponent } from 'hocs/EditableComponent'
import { withLogin } from 'hocs/withLogin'

// Utils

import { spacing, shadow, colors } from 'utils/theme'

// Elements

const Container = styled(FlexCol)``
const LessonHeader = styled(FlexRow)`
  position: sticky;
  top: 0;
  z-index: 10;
  align-items: flex-start;
  padding: ${spacing.large} ${spacing.large} ${spacing.medium};
  background: ${colors.white};
  border-bottom: 1px solid ${colors.grayLighter};
  box-shadow: ${colors.shadowActive};
`
const LessonToggle = styled(Toggle)`
  margin-left: auto;
`
const LessonBreadcrumb = styled(Breadcrumb)`
  position: absolute;
  top: -22px;
  left: 0;
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
const LessonPlayer = styled(Player)`
  max-height: 256px;
`
const LessonBody = styled(FlexCol)`
  width: initial;
  margin: ${spacing.medium};
`
const SectionRow = styled(FlexRow)`
  align-items: flex-start;
  width: initial;
`
const SectionCol = styled(FlexCol)`
  ${shadow()};
  margin-bottom: ${spacing.medium};
`
const SectionBody = styled(FlexCol)`
  padding: ${spacing.regular};
`
const SectionRightCol = styled(SectionCol)`
  margin-left: ${spacing.medium};
`
const EditableLabel = styled(Label)`
  margin-bottom: ${spacing.regular};
`
const VideoSettingsRow = styled(FlexRow)`
  align-items: flex-start;
  margin-top: ${spacing.regular};
`
const VideoSettingsLabelsRow = styled(FlexRow)`
  flex-wrap: wrap;
`
const VideoSettingsLabel = styled(Label)`
  width: initial;
  margin-right: ${spacing.medium};
  margin-bottom: ${spacing.xsmall};
`
const VideoSettingsLink = styled(Link)`
  margin-left: auto;
`
const ChatCol = styled(FlexCol)`
  max-height: 512px;
`

// GraphQL

const lessonQuery = gql`
  query Lesson($id: ID!) {
    lesson(id: $id) {
      id
      name
      description
      thumbnail
      schedule
      premium
      isLive
      streamKey
      streamURL
      isLive
      course {
        id
        name
      }
    }
  }
`

const updateLessonLiveMutation = gql`
  mutation UpdateLessonLive($id: ID!) {
    goLive(id: $id) {
      id
      isLive
    }
  }
`

const updateLessonNameMutation = gql`
  mutation UpdateLessonName($id: ID!, $data: String) {
    updateLesson(id: $id, name: $data) {
      id
      name
    }
  }
`

const updateLessonDescriptionMutation = gql`
  mutation UpdateLessonDescription($id: ID!, $data: String) {
    updateLesson(id: $id, description: $data) {
      id
      description
    }
  }
`

const updateLessonScheduleMutation = gql`
  mutation UpdateLessonSchedule($id: ID!, $data: DateTime) {
    updateLesson(id: $id, schedule: $data) {
      id
      schedule
    }
  }
`

const updateLessonFilesMutation = gql`
  mutation UpdateLessonFiles($id: ID!, $data: [Upload!]) {
    updateLesson(id: $id, files: $data) {
      id
      files {
        id
        contentType
        url
      }
    }
  }
`

class LessonPage extends React.Component {
  static getInitialProps(ctx) {
    const lessonId = ctx.query.lessonId

    if (!lessonId) {
      return redirect(ctx, '/profile/lessons')
    }

    return { lessonId }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar activePage="profile" />
        <SideNav activeSection="lessons">
          <Query
            query={lessonQuery}
            variables={{ id: this.props.lessonId }}
            notifyOnNetworkStatusChange
          >
            {({ networkStatus, data }) => {
              switch (networkStatus) {
                case NetworkStatus.loading: {
                  return <Loading />
                }

                case NetworkStatus.ready: {
                  return (
                    <Container>
                      <LessonHeader>
                        <LessonMeta>
                          <LessonTitle>
                            <LessonBreadcrumb href="/profile/lessons">
                              Back to Lessons
                            </LessonBreadcrumb>
                            {data.lesson.name}
                          </LessonTitle>
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
                              {data.lesson.schedule
                                ? moment(data.lesson.schedule).format('M/D/YY')
                                : 'No date set'}
                            </LessonMetaItem>
                            <LessonMetaItem
                              color="gray"
                              weight="bold"
                              size="small"
                            >
                              <LessonIcon src={clockGrayIcon} />
                              {data.lesson.schedule
                                ? moment(data.lesson.schedule)
                                    .tz('America/New_York')
                                    .format('LT z')
                                : 'No date set'}
                            </LessonMetaItem>
                          </FlexRow>
                        </LessonMeta>
                        <EditableComponent
                          mutation={updateLessonLiveMutation}
                          variables={{ id: this.props.lessonId }}
                          value={data.lesson.isLive}
                        >
                          {({ status, value, onChange, onSubmit }) => (
                            <LessonToggle
                              activeLabel="Live"
                              inactiveLabel="Offline"
                              onChange={e => {
                                e.preventDefault()
                                onChange(!data.lesson.isLive)
                                // onChange(
                                //   data.lesson.isLive || !this.state.testIsLive,
                                // )
                              }}
                              onClick={onSubmit}
                              onBlur={onSubmit}
                              value={value}
                            />
                          )}
                        </EditableComponent>
                      </LessonHeader>

                      <LessonBody>
                        <SectionRow>
                          <SectionCol>
                            <IconHeader src={iconVideo} value="Video" />
                            <SectionBody>
                              <LessonPlayer
                                autoPlay={data.lesson.live}
                                src="https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
                              />
                              <VideoSettingsRow>
                                <VideoSettingsLabelsRow>
                                  <VideoSettingsLabel>
                                    Server Url
                                    <Text>https://stream.homeroom.live</Text>
                                  </VideoSettingsLabel>
                                  <VideoSettingsLabel>
                                    Live Stream Key
                                    <Text>Super-Secret-Streams</Text>
                                  </VideoSettingsLabel>
                                  <VideoSettingsLabel>
                                    Preview Stream Key
                                    <Text>Preview-Streams</Text>
                                  </VideoSettingsLabel>
                                </VideoSettingsLabelsRow>
                                <VideoSettingsLink
                                  href="/dashboard/howtostream"
                                  prefetch
                                >
                                  <Button color="primary" src={iconHelpWhite}>
                                    How to Stream
                                  </Button>
                                </VideoSettingsLink>
                              </VideoSettingsRow>
                            </SectionBody>
                          </SectionCol>

                          <SectionRightCol>
                            <IconHeader src={iconChat} value="Chat" />
                            <ChatCol>
                              <Chat lessonId={this.props.lessonId} />
                            </ChatCol>
                          </SectionRightCol>
                        </SectionRow>

                        <SectionRow>
                          <SectionCol>
                            <IconHeader
                              src={iconInformation}
                              value="Information"
                            />
                            <SectionBody>
                              <EditableLabel>
                                Name
                                <EditableComponent
                                  mutation={updateLessonNameMutation}
                                  variables={{ id: this.props.lessonId }}
                                  value={data.lesson.name}
                                >
                                  {({ status, value, onChange, onSubmit }) => (
                                    <Input
                                      type="text"
                                      value={value}
                                      onChange={e => {
                                        e.preventDefault()
                                        onChange(e.target.value)
                                      }}
                                      onBlur={onSubmit}
                                    />
                                  )}
                                </EditableComponent>
                              </EditableLabel>

                              <EditableLabel size="regular">
                                Date & Time
                                <EditableComponent
                                  mutation={updateLessonScheduleMutation}
                                  variables={{ id: this.props.lessonId }}
                                  value={data.lesson.schedule}
                                >
                                  {({ status, value, onChange, onSubmit }) => (
                                    <DatePicker
                                      showTimeSelect
                                      name="schedule"
                                      type="date"
                                      dateFormat="M/D/YY – h:mma"
                                      timeFormat="h:mm a"
                                      customInput={<Input type="button" />}
                                      selected={value && moment(value)}
                                      onChange={onChange}
                                      onBlur={onSubmit}
                                    />
                                  )}
                                </EditableComponent>
                              </EditableLabel>

                              <EditableLabel>
                                Description
                                <EditableComponent
                                  mutation={updateLessonDescriptionMutation}
                                  variables={{ id: this.props.lessonId }}
                                  value={data.lesson.description}
                                >
                                  {({ status, value, onChange, onSubmit }) => (
                                    <Textarea
                                      type="text"
                                      rows={5}
                                      minRows={5}
                                      value={value}
                                      onChange={e => {
                                        e.preventDefault()
                                        onChange(e.target.value)
                                      }}
                                      onBlur={onSubmit}
                                    />
                                  )}
                                </EditableComponent>
                              </EditableLabel>
                            </SectionBody>
                          </SectionCol>

                          <SectionRightCol>
                            <IconHeader src={iconFile} value="Files" />
                            <SectionBody>
                              <EditableLabel>
                                Files
                                <EditableComponent
                                  mutation={updateLessonFilesMutation}
                                  variables={{ id: this.props.lessonId }}
                                  value={data.lesson.files}
                                >
                                  {({ status, value, onChange, onSubmit }) => (
                                    <FilePicker
                                      value={value}
                                      onChange={files => {
                                        onChange(files)
                                        onSubmit()
                                      }}
                                    />
                                  )}
                                </EditableComponent>
                              </EditableLabel>
                            </SectionBody>
                          </SectionRightCol>
                        </SectionRow>
                      </LessonBody>
                    </Container>
                  )
                }

                default: {
                  return null
                }
              }
            }}
          </Query>
        </SideNav>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withLogin(LessonPage, { setup: true })
