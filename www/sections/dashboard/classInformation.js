import React, { Fragment } from 'react'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
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

import { spacing, shadow, outline, colors, opacity } from 'utils/theme'
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
const ClassImage = styled.img`
  object-fit: contain;
  border-radius: 4px;
  width: 100%;
  max-width: 256px;
  max-height: 144px;
  margin-right: ${spacing.regular};
  background: ${colors.black};
`
const ClassMeta = styled(FlexCol)`
  width: initial;
`
// margin-top: ${spacing.regular};
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
  min-height: 512px;
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
const VideoSettingsLabel = styled(Label)`
  width: initial;
  margin-right: ${spacing.medium};
  margin-bottom: 0;
`
const VideoSettingsLink = styled(Link)`
  margin-left: auto;
`

// Class Information

class _ClassInformation extends React.Component {
  state = {
    name: '',
    description: '',
    thumbnail: null,
    video: null,
    price: '',
    schedule: null,
    files: [],
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    })
  }

  handleDescriptionChange = e => {
    this.setState({
      description: e.target.value,
    })
  }

  handleThumbnailChange = thumbnail => {
    this.setState({
      thumbnail: thumbnail[0],
    })
  }

  handleThumbnailRemove = e => {
    this.setState({
      thumbnail: null,
    })
  }

  handleVideoChange = video => {
    this.setState({
      video: video[0],
    })
  }

  handleVideoRemove = () => {
    this.setState({
      video: null,
    })
  }

  handlePriceChange = e => {
    this.setState({
      price: e.target.value,
    })
  }

  handleScheduleChange = date => {
    this.setState({
      schedule: date,
    })
  }

  handleFilesChange = files => {
    this.setState({
      files,
    })
  }

  render() {
    return (
      <Query
        query={classQuery}
        variables={{ classId: this.props.router.query.classId }}
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
                    <ClassToggle
                      activeLabel="Live"
                      inactiveLabel="Offline"
                      onChange={() => {}}
                    />
                  </ClassHeader>

                  <ClassBody>
                    <SectionCol>
                      <IconHeader inline src={iconVideo} value="Video" />
                      <SectionBody>
                        <Player
                          autoPlay
                          src="https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
                        />
                        <VideoSettingsRow>
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
                          <VideoSettingsLink href="">
                            <Button color="primary" src={iconHelpWhite}>
                              How to Stream
                            </Button>
                          </VideoSettingsLink>
                        </VideoSettingsRow>
                      </SectionBody>
                    </SectionCol>

                    <SectionRow>
                      <SectionCol>
                        <IconHeader inline src={iconChat} value="Chat" />
                        <SectionBody />
                      </SectionCol>
                      <QuestionsDisabledCol>
                        <IconHeader inline src={iconHelp} value="Questions" />
                        <QuestionsDisabledBody>
                          <Text size="medium" weight="bold">
                            Coming Soon!
                          </Text>
                        </QuestionsDisabledBody>
                      </QuestionsDisabledCol>
                    </SectionRow>

                    <SectionRow>
                      <SectionCol>
                        <IconHeader
                          inline
                          src={iconInformation}
                          value="Information"
                        />
                        <SectionBody>
                          <EditableLabel size="regular">
                            Thumbnail
                            <ImagePicker value={''} />
                          </EditableLabel>
                          <EditableLabel>
                            Name
                            <Input
                              type="text"
                              value={this.state.name}
                              onChange={this.handleNameChange}
                            />
                          </EditableLabel>
                          <EditableLabel>
                            Description
                            <Textarea
                              type="text"
                              value={this.state.description}
                              onChange={this.handleDescriptionChange}
                            />
                          </EditableLabel>
                          <FlexRow>
                            <PriceLabel size="small">
                              Price
                              <Input
                                type="number"
                                value={this.state.price}
                                onChange={this.handlePriceChange}
                              />
                            </PriceLabel>
                            <EditableLabel>
                              Date & Time
                              <DatePicker
                                showTimeSelect
                                name="schedule"
                                type="date"
                                dateFormat="M/D/YY – h:mma"
                                timeFormat="h:mm a"
                                customInput={<Input type="text" />}
                                selected={this.state.schedule}
                                onChange={this.handleScheduleChange}
                              />
                            </EditableLabel>
                          </FlexRow>
                        </SectionBody>
                      </SectionCol>

                      <SectionRightCol>
                        <IconHeader inline src={iconFile} value="Files" />
                        <SectionBody>
                          <EditableLabel>
                            Overview Video
                            <VideoPicker value={''} />
                          </EditableLabel>
                          <EditableLabel>
                            Files
                            <FilePicker value={[]} />
                          </EditableLabel>
                        </SectionBody>
                      </SectionRightCol>
                    </SectionRow>
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
    )
  }
}

export const ClassInformation = withRouter(_ClassInformation)
