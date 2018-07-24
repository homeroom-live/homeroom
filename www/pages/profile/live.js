import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import moment from 'moment-timezone'

// Components

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
import { VideoPicker } from 'components/VideoPicker'
import { ImagePicker } from 'components/ImagePicker'
import { FilePicker } from 'components/FilePicker'
import { IconHeader } from 'components/IconHeader'
import { Label } from 'components/Label'
import { Toggle } from 'components/Toggle'
import { Input } from 'components/Input'
import { Textarea } from 'components/Textarea'
import { DatePicker } from 'components/DatePicker'

// Icons

import userGrayIcon from 'static/assets/icons/ui/user-gray.svg'
import clockGrayIcon from 'static/assets/icons/ui/clock-gray.svg'
import calendarGrayIcon from 'static/assets/icons/ui/calendar-gray.svg'
import iconVideo from 'static/assets/icons/ui/video.svg'
import iconChat from 'static/assets/icons/ui/chat.svg'
import iconHelp from 'static/assets/icons/ui/help.svg'
import iconHelpWhite from 'static/assets/icons/ui/help-white.svg'
import iconInformation from 'static/assets/icons/ui/information.svg'
import iconFile from 'static/assets/icons/ui/file.svg'

// HOCs

import { EditableComponent } from 'hocs/EditableComponent'

// Utils

import {
  spacing,
  shadow,
  outline,
  colors,
  opacity,
  HEIGHT_MINUS_NAVBAR,
} from 'utils/theme'

// GraphQL

const liveLessonQuery = gql`
  query {
    viewer {
      user {
        id
      }
    }
  }
`

// margin: ${spacing.medium};
const ClassInformationCol = styled(FlexCol)``
const ClassHeader = styled(FlexRow)`
  position: sticky;
  top: 0;
  z-index: 10;
  align-items: flex-start;
  padding: ${spacing.large} ${spacing.large} ${spacing.medium};
  background: ${colors.white};
  border-bottom: 1px solid ${colors.grayLighter};
  box-shadow: ${colors.shadowActive};
`
const ClassToggle = styled(Toggle)`
  margin-left: auto;
`
const ClassBreadcrumb = styled(Breadcrumb)`
  position: absolute;
  top: -22px;
  left: 0;
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
const CLASS_HEADER_HEIGHT = '140px'
const ClassPlayer = styled(Player)`
  max-height: 256px;
`
// height: calc(${HEIGHT_MINUS_NAVBAR} - ${CLASS_HEADER_HEIGHT} - 20vh);
const ClassBody = styled(FlexCol)`
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
const QuestionsDisabledCol = styled(FlexCol)`
  ${outline()};
  margin-left: ${spacing.medium};
  margin-bottom: ${spacing.medium};
  cursor: not-allowed;
  opacity: ${opacity};
`
const QuestionsDisabledBody = styled(SectionBody)`
  align-items: center;
  justify-content: center;
`
const EditableLabel = styled(Label)`
  margin-bottom: ${spacing.regular};
`
const PriceLabel = styled(EditableLabel)`
  margin-right: ${spacing.regular};
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

/*
  <Query
  query={lesson}
  variables={{ classId: router.query.classId }}
  notifyOnNetworkStatusChange
>
  {({ networkStatus, data }) => {
    switch (networkStatus) {
      case 1: {
        return <Loading />
      }
      case 7: {
        return (
        */
export const Body = withRouter(({ router, data }) => (
  <>
    <ClassInformationCol>
      <ClassHeader>
        <ClassMeta>
          <ClassTitle>
            <ClassBreadcrumb href="/profile/lessons">
              Back to Lessons
            </ClassBreadcrumb>
            {data.lesson.name}
          </ClassTitle>
          <FlexRow>
            <ClassMetaItem color="gray" weight="bold" size="small">
              <ClassIcon src={userGrayIcon} />
              {0} Students
            </ClassMetaItem>
            <ClassMetaItem color="gray" weight="bold" size="small">
              <ClassIcon src={calendarGrayIcon} />
              {data.lesson.schedule
                ? moment(data.lesson.schedule).format('M/D/YY')
                : 'No date set'}
            </ClassMetaItem>
            <ClassMetaItem color="gray" weight="bold" size="small">
              <ClassIcon src={clockGrayIcon} />
              {data.lesson.schedule
                ? moment(data.lesson.schedule)
                    .tz('America/New_York')
                    .format('LT z')
                : 'No date set'}
            </ClassMetaItem>
          </FlexRow>
        </ClassMeta>
        <EditableComponent
          mutation={gql`
            mutation UpdateClassLive($classId: ID!, $data: Boolean) {
              updateClass(id: $classId, live: $data) {
                id
                live
              }
            }
          `}
          variables={{ classId: router.query.classId }}
          value={data.lesson.live}
        >
          {({ status, value, onChange, onSubmit }) => (
            <ClassToggle
              activeLabel="Live"
              inactiveLabel="Offline"
              onChange={e => {
                e.preventDefault()
                console.log(e, e.target.checked)
                onChange(true)
              }}
              onBlur={onSubmit}
              value={value}
            />
          )}
        </EditableComponent>
      </ClassHeader>

      <ClassBody>
        <SectionRow>
          <SectionCol>
            <IconHeader src={iconVideo} value="Video" />
            <SectionBody>
              <ClassPlayer
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
                <VideoSettingsLink href="/dashboard/howtostream" prefetch>
                  <Button color="primary" src={iconHelpWhite}>
                    How to Stream
                  </Button>
                </VideoSettingsLink>
              </VideoSettingsRow>
            </SectionBody>
          </SectionCol>

          <SectionRightCol>
            <IconHeader src={iconChat} value="Chat" />
            <SectionBody />
          </SectionRightCol>
        </SectionRow>

        <SectionRow>
          <SectionCol>
            <IconHeader src={iconInformation} value="Information" />
            <SectionBody>
              <EditableLabel size="regular">
                Thumbnail
                <EditableComponent
                  mutation={gql`
                    mutation UpdateClassThumbnail(
                      $classId: ID!
                      $data: Upload
                    ) {
                      updateClass(id: $classId, thumbnail: $data) {
                        id
                        thumbnail {
                          id
                          url
                        }
                      }
                    }
                  `}
                  variables={{ classId: router.query.classId }}
                  value={data.lesson.thumbnail}
                >
                  {({ status, value, onChange, onSubmit }) => (
                    <ImagePicker
                      value={value}
                      onChange={thumbnail => {
                        onChange(thumbnail)

                        console.log(thumbnail)
                        if (thumbnail) {
                          onSubmit()
                        }
                      }}
                    />
                  )}
                </EditableComponent>
              </EditableLabel>
              <EditableLabel>
                Name
                <EditableComponent
                  mutation={gql`
                    mutation UpdateClassName($classId: ID!, $data: String) {
                      updateClass(id: $classId, name: $data) {
                        id
                        name
                      }
                    }
                  `}
                  variables={{ classId: router.query.classId }}
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
              <EditableLabel>
                Description
                <EditableComponent
                  mutation={gql`
                    mutation UpdateClassDescription(
                      $classId: ID!
                      $data: String
                    ) {
                      updateClass(id: $classId, description: $data) {
                        id
                        description
                      }
                    }
                  `}
                  variables={{ classId: router.query.classId }}
                  value={data.lesson.description}
                >
                  {({ status, value, onChange, onSubmit }) => (
                    <Textarea
                      type="text"
                      rows={5}
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
              <FlexRow>
                <PriceLabel size="small">
                  Price
                  <EditableComponent
                    mutation={gql`
                      mutation UpdateClassPrice($classId: ID!, $data: Float) {
                        updateClass(id: $classId, price: $data) {
                          id
                          price
                        }
                      }
                    `}
                    variables={{ classId: router.query.classId }}
                    value={data.lesson.price}
                  >
                    {({ status, value, onChange, onSubmit }) => (
                      <Input
                        type="number"
                        value={value}
                        onChange={e => {
                          e.preventDefault()
                          onChange(e.target.value)
                        }}
                        onBlur={onSubmit}
                      />
                    )}
                  </EditableComponent>
                </PriceLabel>
                <EditableLabel>
                  Date & Time
                  <EditableComponent
                    mutation={gql`
                      mutation UpdateClassSchedule(
                        $classId: ID!
                        $data: DateTime
                      ) {
                        updateClass(id: $classId, schedule: $data) {
                          id
                          schedule
                        }
                      }
                    `}
                    variables={{ classId: router.query.classId }}
                    value={data.lesson.schedule}
                  >
                    {({ status, value, onChange, onSubmit }) => (
                      <DatePicker
                        showTimeSelect
                        name="schedule"
                        type="date"
                        dateFormat="M/D/YY – h:mma"
                        timeFormat="h:mm a"
                        customInput={<Input type="text" />}
                        selected={value && moment(value)}
                        onChange={onChange}
                        onBlur={onSubmit}
                      />
                    )}
                  </EditableComponent>
                </EditableLabel>
              </FlexRow>
            </SectionBody>
          </SectionCol>

          <SectionRightCol>
            <IconHeader src={iconFile} value="Files" />
            <SectionBody>
              <EditableLabel>
                Overview Video
                <EditableComponent
                  mutation={gql`
                    mutation UpdateClassVideo($classId: ID!, $data: Upload) {
                      updateClass(id: $classId, video: $data) {
                        id
                        video {
                          id
                          url
                        }
                      }
                    }
                  `}
                  variables={{ classId: router.query.classId }}
                  value={data.lesson.video}
                >
                  {({ status, value, onChange, onSubmit }) => (
                    <VideoPicker
                      value={value}
                      onChange={video => {
                        onChange(video)
                        onSubmit()
                      }}
                    />
                  )}
                </EditableComponent>
              </EditableLabel>
              <EditableLabel>
                Files
                <EditableComponent
                  mutation={gql`
                    mutation UpdateClassFiles($classId: ID!, $data: [Upload!]) {
                      updateClass(id: $classId, files: $data) {
                        id
                        files {
                          id
                          contentType
                          url
                        }
                      }
                    }
                  `}
                  variables={{ classId: router.query.classId }}
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
        {/*                  <QuestionsDisabledCol>
                    <IconHeader src={iconHelp} value="Questions" />
                    <QuestionsDisabledBody>
                      <Text size="medium" weight="bold">
                        Coming Soon!
                      </Text>
                    </QuestionsDisabledBody>
                  </QuestionsDisabledCol>*/}
      </ClassBody>
    </ClassInformationCol>
  </>
))

import React from 'react'

import { SideNav } from 'pages/profile/components/SideNav'
import { Body } from 'pages/profile/lessons/live/components/Body'
import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'
import { withLogin } from 'hocs/withLogin'
import { withSetup } from 'hocs/withSetup'

import { viewer } from 'data/viewer'
import { lessons } from 'data/lessons'

class LiveLessonPage extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navbar activePage="profile" />
        <SideNav data={{ viewer }} activeSection="lessons">
          <Body data={{ lesson: lessons[0] }} />
        </SideNav>
        <Footer />
      </>
    )
  }
}

export default withLogin(withSetup(LiveLessonPage))
