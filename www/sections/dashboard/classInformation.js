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
import { TextStyle } from 'components/TextStyle'
import { Icon } from 'components/Icon'
import { Link } from 'components/Link'
import { Button } from 'components/Button'
import { VideoPicker } from 'components/VideoPicker'
import { ImagePicker } from 'components/ImagePicker'
import { FilePicker } from 'components/FilePicker'
import { IconHeader } from 'components/IconHeader'
import { Label } from 'components/Label'
import { withEditable } from 'hocs/withEditable'

import { spacing, shadow, outline, colors } from 'utils/theme'
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
        teacher {
          # This should be teachers on Class
          id
          name
          url
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
            sender {
              id
              name
            }
          }
        }
      }
    }
  }
`

// margin: ${spacing.medium};
const ClassInformationCol = styled(FlexCol)``
const ClassHeader = styled(FlexCol)`
  position: sticky;
  top: 0;
  z-index: 10;
  align-items: flex-start;
  padding: ${spacing.medium} ${spacing.large};
  background: ${colors.white};
  border-bottom: 1px solid ${colors.grayLighter};
  box-shadow: ${colors.shadowActive};
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
const EditableClassTitle = withEditable(styled(Header)``)
// const EditableClassTitle = styled(Header)``
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
const EditableText = withEditable(Text)
const EditableLabel = styled(Label)`
  margin-bottom: ${spacing.regular};
`
const VideoSettingsRow = styled(FlexRow)`
  margin-top: ${spacing.regular};
`
const VideoSettingsLabel = styled(Label)`
  margin: 0;
  margin-right: ${spacing.medium};
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
              {/*<Breadcrumb
              href={`/dashboard/classrooms/classroom/${
                data.class.classroom.id
              }`}
            >
              Back to {data.class.classroom.name}
            </Breadcrumb>*/}
              <ClassHeader>
                <ClassMeta>
                  <EditableClassTitle
                    value={data.class.name}
                    handleSave={() => {}}
                  />
                  <VideoSettingsRow>
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
                  </VideoSettingsRow>
                </ClassMeta>
              </ClassHeader>
              <ClassBody>
                <SectionCol>
                  <IconHeader inline src={iconVideo} value="Video" />
                  <SectionBody>
                    <VideoPicker value="https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" />

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
                  <SectionRightCol>
                    <IconHeader inline src={iconHelp} value="Questions" />
                    <SectionBody />
                  </SectionRightCol>
                </SectionRow>

                <SectionRow>
                  <SectionCol>
                    <IconHeader
                      inline
                      src={iconInformation}
                      value="Information"
                    />
                    <SectionBody>
                      <EditableLabel>
                        Description
                        <EditableText value={data.class.description} />
                      </EditableLabel>
                      <EditableLabel>
                        Price
                        <EditableText value={data.class.price} />
                      </EditableLabel>
                      <EditableLabel>
                        Date & Time
                        <EditableText value={data.class.schedule} />
                      </EditableLabel>
                    </SectionBody>
                  </SectionCol>
                  <SectionRightCol>
                    <IconHeader inline src={iconFile} value="Files" />
                    <SectionBody>
                      <EditableLabel>
                        Cover Picture
                        <ImagePicker value={''} />
                      </EditableLabel>
                      <EditableLabel>
                        Class Files
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
))
