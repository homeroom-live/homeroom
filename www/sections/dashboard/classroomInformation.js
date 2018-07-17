import React from 'react'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import moment from 'moment-timezone'

import { EditableComponent } from 'hocs/EditableComponent'
import { ClassroomHeader } from 'sections/dashboard/classroomHeader'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Loading } from 'components/Loading'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { Breadcrumb } from 'components/Breadcrumb'
import { Icon } from 'components/Icon'
import { TextStyle } from 'components/TextStyle'
import { Button } from 'components/Button'
import { IconHeader } from 'components/IconHeader'
import { ProfileLinks } from 'components/ProfileLinks'
import { Label } from 'components/Label'
import { Input } from 'components/Input'
import { Textarea } from 'components/Textarea'
import { ImagePicker } from 'components/ImagePicker'
import { VideoPicker } from 'components/VideoPicker'

import { colors, spacing, outline, shadow } from 'utils/theme'
import userGrayIcon from 'static/assets/icons/ui/user-gray.svg'
import clockGrayIcon from 'static/assets/icons/ui/clock-gray.svg'
import calendarGrayIcon from 'static/assets/icons/ui/calendar-gray.svg'
import videoIcon from 'static/assets/icons/ui/video.svg'
import iconInformation from 'static/assets/icons/ui/information.svg'
import iconFile from 'static/assets/icons/ui/file.svg'

// GraphQL

const classroomQuery = gql`
  query ClassroomQuery($classroomId: ID!) {
    classroom(id: $classroomId) {
      id
      name
      description
      teachersConnection {
        edges {
          node {
            id
            name
          }
        }
      }
      classesConnection {
        aggregate {
          count
        }
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`

// Components

const ClassroomInformationCol = styled(FlexCol)`
  margin: ${spacing.medium} ${spacing.medium} ${spacing.xxxlarge};
`
const BorderedClassroomHeader = styled(ClassroomHeader)`
  ${outline()};
`
const ClassesCol = styled(FlexCol)`
  ${outline()};
  margin: ${spacing.medium} 0;
`
const ClassRow = styled(FlexRow)`
  display: flex;
  padding: ${spacing.regular};
  text-decoration: none;
  color: transparent;
  &:hover {
    color: transparent;
    text-decoration: none;
    background: ${colors.grayLightest};
  }
`
const ClassImage = styled.img`
  object-fit: contain;
  border-radius: 4px;
  width: 100%;
  max-width: 128px;
  max-height: 72px;
  margin-right: ${spacing.regular};
  background: ${colors.black};
`
const ClassTitle = styled(Link)`
  color: ${colors.secondary};
  &:hover {
    color: ${colors.secondary};
  }
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
const ClassActions = styled(FlexRow)`
  flex: 1;
  justify-content: flex-end;
  margin-left: auto;
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
const EditableLabel = styled(Label)`
  margin-bottom: ${spacing.regular};
`

const Class = ({ node, teachers }) => (
  <ClassRow>
    <ClassImage src="https://img.huffingtonpost.com/asset/585be1aa1600002400bdf2a6.jpeg?ops=scalefit_970_noupscale" />
    <ClassMeta>
      <ProfileLinks users={teachers} />
      <ClassTitle href={`/dashboard/classes/class/${node.id}`} weight="bold">
        {node.name} <TextStyle color="primary">{node.price}</TextStyle>
      </ClassTitle>
      <FlexRow>
        <ClassMetaItem color="gray" weight="bold" size="small">
          <ClassIcon src={userGrayIcon} />
          {0} Students
        </ClassMetaItem>
        <ClassMetaItem color="gray" weight="bold" size="small">
          <ClassIcon src={calendarGrayIcon} />
          {moment(node.schedule).format('M/D/YY')}
        </ClassMetaItem>
        <ClassMetaItem color="gray" weight="bold" size="small">
          <ClassIcon src={clockGrayIcon} />
          {moment(node.schedule)
            .tz('America/New_York')
            .format('LT z')}
        </ClassMetaItem>
      </FlexRow>
    </ClassMeta>
    <ClassActions>
      <Link href={`/dashboard/classes/class/${node.id}`} textDecoration="none">
        <Button color="primary">Edit</Button>
      </Link>
    </ClassActions>
  </ClassRow>
)

// Classroom Information

export const ClassroomInformation = withRouter(({ router }) => (
  <Query
    query={classroomQuery}
    variables={{ classroomId: router.query.classroomId }}
    notifyOnNetworkStatusChange
  >
    {({ networkStatus, data }) => {
      switch (networkStatus) {
        case 1: {
          return <Loading />
        }
        case 7: {
          return (
            <ClassroomInformationCol>
              <Breadcrumb href="/dashboard">Back to Classrooms</Breadcrumb>
              <BorderedClassroomHeader
                id={data.classroom.id}
                name={data.classroom.name}
                numberOfClasses={
                  data.classroom.classesConnection.aggregate.count
                }
                teachers={data.classroom.teachersConnection.edges}
              />

              <ClassesCol>
                <IconHeader src={videoIcon} value="Classes">
                  <Text weight="bold" margin="0" color="gray">
                    {data.classroom.classesConnection.aggregate.count}
                  </Text>
                </IconHeader>
                <div>
                  {data.classroom.classesConnection.edges.map(({ node }) => (
                    <Class
                      node={node}
                      key={node.id}
                      teachers={data.classroom.teachersConnection.edges}
                    />
                  ))}
                </div>
              </ClassesCol>

              <SectionRow>
                <SectionCol>
                  <IconHeader src={iconInformation} value="Information" />
                  <SectionBody>
                    <EditableLabel size="regular">
                      Thumbnail
                      <EditableComponent
                        mutation={gql`
                          mutation UpdateClassroomThumbnail(
                            $classroomId: ID!
                            $data: Boolean
                          ) {
                            updateClassroom(
                              id: $classroomId
                              thumbnail: $data
                            ) {
                              id
                              thumbnail {
                                id
                                url
                              }
                            }
                          }
                        `}
                        variables={{
                          classroomId: router.query.classroomId,
                        }}
                        value={data.classroom.thumbnail}
                      >
                        {({ status, value, onChange, onSubmit }) => (
                          <ImagePicker
                            onChange={thumbnail => {
                              onChange(thumbnail)
                              onSubmit()
                            }}
                            value={value}
                          />
                        )}
                      </EditableComponent>
                    </EditableLabel>
                    <EditableLabel>
                      Name
                      <EditableComponent
                        mutation={gql`
                          mutation UpdateClassroomName(
                            $classroomId: ID!
                            $data: String
                          ) {
                            updateClassroom(id: $classroomId, name: $data) {
                              id
                              name
                            }
                          }
                        `}
                        variables={{
                          classroomId: router.query.classroomId,
                        }}
                        value={data.classroom.name}
                      >
                        {({ status, value, onChange, onSubmit }) => (
                          <Input
                            type="text"
                            onChange={e => {
                              e.preventDefault()
                              onChange(e.target.value)
                            }}
                            onBlur={onSubmit}
                            value={value}
                          />
                        )}
                      </EditableComponent>
                    </EditableLabel>
                    <EditableLabel>
                      Description
                      <EditableComponent
                        mutation={gql`
                          mutation UpdateClassroomDescription(
                            $classroomId: ID!
                            $data: String
                          ) {
                            updateClassroom(
                              id: $classroomId
                              description: $data
                            ) {
                              id
                              description
                            }
                          }
                        `}
                        variables={{
                          classroomId: router.query.classroomId,
                        }}
                        value={data.classroom.description}
                      >
                        {({ status, value, onChange, onSubmit }) => (
                          <Textarea
                            onChange={e => {
                              e.preventDefault()
                              onChange(e.target.value)
                            }}
                            onBlur={onSubmit}
                            value={value}
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
                      Overview Video
                      <EditableComponent
                        mutation={gql`
                          mutation UpdateClassroomVideo(
                            $classroomId: ID!
                            $data: Upload
                          ) {
                            updateClassroom(id: $classroomId, video: $data) {
                              id
                              video {
                                id
                                url
                              }
                            }
                          }
                        `}
                        variables={{
                          classroomId: router.query.classroomId,
                        }}
                        value={data.classroom.video}
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
                  </SectionBody>
                </SectionRightCol>
              </SectionRow>
            </ClassroomInformationCol>
          )
        }
        default: {
          return null
        }
      }
    }}
  </Query>
))
