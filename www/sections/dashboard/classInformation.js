import React from 'react'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import moment from 'moment-timezone'

// Components

import { EditableComponent } from 'hocs/EditableComponent'
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

import {
  spacing,
  shadow,
  outline,
  colors,
  opacity,
  HEIGHT_MINUS_NAVBAR,
} from 'utils/theme'
import userGrayIcon from 'static/assets/icons/ui/user-gray.svg'
import clockGrayIcon from 'static/assets/icons/ui/clock-gray.svg'
import calendarGrayIcon from 'static/assets/icons/ui/calendar-gray.svg'
import iconVideo from 'static/assets/icons/ui/video.svg'
import iconChat from 'static/assets/icons/ui/chat.svg'
import iconHelp from 'static/assets/icons/ui/help.svg'
import iconHelpWhite from 'static/assets/icons/ui/help-white.svg'
import iconInformation from 'static/assets/icons/ui/information.svg'
import iconFile from 'static/assets/icons/ui/file.svg'

// GraphQL

const classQuery = gql`
  query ClassQuery($classId: ID!) {
    class(id: $classId) {
      id
      name
      description
      price
      thumbnail {
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
      vod {
        id
        url
      }
      classroom {
        id
        name
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

// Class Information

export const ClassInformation = withRouter(({ router }) => (
  <Query
    query={classQuery}
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
            <ClassInformationCol>
              <ClassHeader>
                <ClassMeta>
                  <ClassTitle>
                    <ClassBreadcrumb
                      href={`/dashboard/classrooms/classroom/${
                        data.class.classroom.id
                      }`}
                    >
                      Back to Classroom
                    </ClassBreadcrumb>
                    {data.class.name}
                  </ClassTitle>
                  <FlexRow>
                    <ClassMetaItem color="gray" weight="bold" size="small">
                      <ClassIcon src={userGrayIcon} />
                      {0} Students
                    </ClassMetaItem>
                    <ClassMetaItem color="gray" weight="bold" size="small">
                      <ClassIcon src={calendarGrayIcon} />
                      {data.class.schedule
                        ? moment(data.class.schedule).format('M/D/YY')
                        : 'No date set'}
                    </ClassMetaItem>
                    <ClassMetaItem color="gray" weight="bold" size="small">
                      <ClassIcon src={clockGrayIcon} />
                      {data.class.schedule
                        ? moment(data.class.schedule)
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
                  value={data.class.live}
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
                        autoPlay={data.class.live}
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
                          value={data.class.thumbnail}
                        >
                          {({ status, value, onChange, onSubmit }) => (
                            <ImagePicker
                              value={value}
                              onBlur={onSubmit}
                              onChange={thumbnail => {
                                onChange(thumbnail)
                                onSubmit()
                              }}
                            />
                          )}
                        </EditableComponent>
                      </EditableLabel>
                      <EditableLabel>
                        Name
                        <EditableComponent
                          mutation={gql`
                            mutation UpdateClassName(
                              $classId: ID!
                              $data: String
                            ) {
                              updateClass(id: $classId, name: $data) {
                                id
                                name
                              }
                            }
                          `}
                          variables={{ classId: router.query.classId }}
                          value={data.class.name}
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
                          value={data.class.description}
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
                              mutation UpdateClassPrice(
                                $classId: ID!
                                $data: Float
                              ) {
                                updateClass(id: $classId, price: $data) {
                                  id
                                  price
                                }
                              }
                            `}
                            variables={{ classId: router.query.classId }}
                            value={data.class.price}
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
                            value={data.class.schedule}
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
                            mutation UpdateClassVideo(
                              $classId: ID!
                              $data: Upload
                            ) {
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
                          value={data.class.video}
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
                            mutation UpdateClassFiles(
                              $classId: ID!
                              $data: [Upload!]
                            ) {
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
                          value={data.class.files}
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
          )
        }
        default: {
          return null
        }
      }
    }}
  </Query>
))
