import React from 'react'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { NetworkStatus } from 'apollo-client'
import styled from 'styled-components'

import { EditableComponent } from 'hocs/EditableComponent'
import { ClassroomHeader } from 'sections/dashboard/classroomHeader'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Loading } from 'components/Loading'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { Breadcrumb } from 'components/Breadcrumb'
import { IconHeader } from 'components/IconHeader'
import { Label } from 'components/Label'
import { Input } from 'components/Input'
import { Textarea } from 'components/Textarea'
import { ImagePicker } from 'components/ImagePicker'
import { VideoPicker } from 'components/VideoPicker'
import { ClassCardSmall } from 'components/ClassCard'

import {
  colors,
  spacing,
  outline,
  shadow,
  transition,
  fontSizes,
  fontWeights,
} from 'utils/theme'
import videoIcon from 'static/assets/icons/ui/video.svg'
import iconInformation from 'static/assets/icons/ui/information.svg'
import iconFile from 'static/assets/icons/ui/file.svg'

// GraphQL

const classroomQuery = gql`
  query ClassroomQuery($classroomId: ID!, $cursor: String) {
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
      classesConnection(first: 5, after: $cursor)
        @connection(key: "classesConnection") {
        pageInfo {
          hasNextPage
          endCursor
        }
        aggregate {
          count
        }
        edges {
          node {
            id
            name
            thumbnail {
              id
              url(width: 50)
            }
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
const ShowMoreButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 1px solid ${colors.grayLighter};
`

// Classroom Information

export const ClassroomInformation = withRouter(({ router }) => (
  <Query
    query={classroomQuery}
    variables={{
      classroomId: router.query.classroomId,
    }}
    notifyOnNetworkStatusChange
  >
    {({ networkStatus, data, fetchMore }) => {
      switch (networkStatus) {
        case NetworkStatus.loading: {
          return <Loading />
        }
        case NetworkStatus.ready:
        case NetworkStatus.fetchMore: {
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
                    <ClassCardSmall
                      node={node}
                      key={node.id}
                      href={`/dashboard/classes/class/${node.id}`}
                      teachers={data.classroom.teachersConnection.edges}
                    />
                  ))}
                </div>
                {data.classroom.classesConnection.pageInfo.hasNextPage && (
                  <ShowMoreButton
                    color="tertiary"
                    onClick={e => {
                      e.preventDefault()

                      fetchMore({
                        variables: {
                          cursor:
                            data.classroom.classesConnection.pageInfo.endCursor,
                        },
                        updateQuery: (previousResult, { fetchMoreResult }) => {
                          const previousEdges =
                            previousResult.classroom.classesConnection.edges
                          const newEdges =
                            fetchMoreResult.classroom.classesConnection.edges
                          const pageInfo =
                            fetchMoreResult.classroom.classesConnection.pageInfo

                          const newClassroomData = {
                            ...previousResult.classroom,
                            classesConnection: {
                              ...previousResult.classroom.classesConnection,
                              edges: [...previousEdges, ...newEdges],
                              pageInfo,
                            },
                          }

                          const newData = {
                            ...previousResult,
                            classroom: newClassroomData,
                          }

                          return newData
                        },
                      })
                    }}
                  >
                    Show More
                  </ShowMoreButton>
                )}
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
                            rows={5}
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
