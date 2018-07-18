import React, { Fragment } from 'react'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styled from 'styled-components'

// Components

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Link } from 'components/Link'
import { Header } from 'components/Header'
import { Text } from 'components/Text'
import { Thumbnail } from 'components/Thumbnail'
import { Loading } from 'components/Loading'
import { Label } from 'components/Label'
import { IconHeader } from 'components/IconHeader'
import { Player } from 'components/Player'
import { EmptyState } from 'components/EmptyState'
import {
  ClassCardLarge,
  ClassCardMedium,
  ClassCardSmall,
} from 'components/ClassCard'

import { shadow, colors, spacing, borderRadius } from 'utils/theme'
import { NETWORK_STATUS } from 'utils/constants'
import iconVideo from 'static/assets/icons/ui/video.svg'
import iconInformation from 'static/assets/icons/ui/information.svg'
import iconHome from 'static/assets/icons/ui/home.svg'
import iconUser from 'static/assets/icons/ui/user.svg'

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
            followersConnection {
              aggregate {
                count
              }
            }
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

const ClassroomRow = styled(FlexRow)`
  position: relative;
  align-items: flex-start;
`
const ClassroomHeader = styled(FlexRow)`
  position: sticky;
  top: 0;
  z-index: 3;
  padding: ${spacing.regular} ${spacing.medium};
  background: ${colors.white};
  border-bottom: 1px solid ${colors.grayLighter};
  box-shadow: 0 15px 30px 0 rgba(66, 75, 84, 0.1);
`
const ClassroomImage = styled(FlexCol)`
  width: initial;
  margin-right: ${spacing.small};
`
const ClassroomBody = styled(FlexCol)`
  margin-bottom: ${spacing.large};
`
const ClassroomClasses = styled(FlexCol)`
  position: sticky;
  top: 0;
  z-index: 5;
  height: 100vh;
  width: 512px;
  overflow: auto;
  background: ${colors.white};
  box-shadow: -15px 0 30px 0 rgba(66, 75, 84, 0.1);
`
const ClassesHeader = styled(IconHeader)`
  position: sticky;
  top: 0;
  z-index: 10;
  flex-shrink: 0;
  background: ${colors.white};
`
const SectionsContainer = styled(FlexCol)`
  width: initial;
  margin: ${spacing.medium};
`
const SectionCol = styled(FlexCol)`
  ${shadow()};
`
const SectionRow = styled(FlexRow)`
  align-items: flex-start;
  margin-top: ${spacing.medium};
  margin-bottom: ${spacing.large};
`
const SectionColLeft = styled(SectionCol)`
  ${shadow()};
  margin-right: ${spacing.medium};
`
const SectionBody = styled(FlexCol)`
  padding: ${spacing.regular};
`
const SectionBodyRow = styled(FlexRow)``
const SectionLabel = styled(Label)`
  margin: 0;
`
const ClassroomVideo = styled(Player)`
  border-bottom-right-radius: ${borderRadius};
  border-bottom-left-radius: ${borderRadius};
`
const CreatorLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${spacing.regular};
  &:hover {
    background: ${colors.grayLightest};
  }
`
const CreatorThumbnail = styled(Thumbnail)`
  margin-right: ${spacing.small};
`
const RecentClassCardMedium = styled(ClassCardMedium)`
  flex-shrink: 0;
  min-height: 268px;
`

// Classroom Information

export const ClassroomInformation = withRouter(({ router }) => (
  <Query
    query={classroomQuery}
    variables={{ classroomId: router.query.classroomId }}
    notifyOnNetworkStatusChange
  >
    {({ networkStatus, data }) => {
      switch (networkStatus) {
        case NETWORK_STATUS.LOADING: {
          return <Loading />
        }
        case NETWORK_STATUS.READY: {
          return (
            <ClassroomRow>
              <ClassroomBody>
                <ClassroomHeader>
                  <ClassroomImage>
                    <Thumbnail
                      src="https://janecanblogdotcom.files.wordpress.com/2014/09/ashley-square-profile.jpg"
                      size="large"
                    />
                  </ClassroomImage>
                  <FlexCol>
                    <Header margin="0">{data.classroom.name}</Header>
                    <Text weight="bold" color="gray">
                      0 Subscribers
                    </Text>
                  </FlexCol>
                </ClassroomHeader>

                <SectionsContainer>
                  <SectionCol>
                    <IconHeader src={iconHome} value="Overview">
                      <Text weight="bold" margin="0" color="gray">
                        {data.classroom.classesConnection.aggregate.count}
                      </Text>
                    </IconHeader>
                    <FlexRow>
                      <ClassroomVideo
                        autoPlay
                        src="http://techslides.com/demos/sample-videos/small.mp4"
                      />
                    </FlexRow>
                  </SectionCol>

                  <SectionRow>
                    <SectionColLeft>
                      <IconHeader src={iconInformation} value="Information" />
                      <SectionBody>
                        <SectionLabel>
                          Description
                          <Text margin="0">{data.classroom.description}</Text>
                        </SectionLabel>
                      </SectionBody>
                    </SectionColLeft>
                    <SectionCol>
                      <IconHeader src={iconUser} value="Creators" />
                      <SectionBodyRow>
                        <CreatorLink
                          weight="bold"
                          size="medium"
                          color="secondary"
                          href="TEACHER_URL"
                        >
                          <CreatorThumbnail
                            size="medium"
                            src="https://janecanblogdotcom.files.wordpress.com/2014/09/ashley-square-profile.jpg"
                          />
                          {data.classroom.teachersConnection.edges[0].node.name}
                        </CreatorLink>
                      </SectionBodyRow>
                    </SectionCol>
                  </SectionRow>
                </SectionsContainer>
              </ClassroomBody>

              <ClassroomClasses>
                <ClassesHeader src={iconVideo} value="Recent Classes" />
                {data.classroom.classesConnection.edges.length === 0 ? (
                  <EmptyState
                    src={iconVideo}
                    value="This classroom has no classes!"
                  />
                ) : (
                  data.classroom.classesConnection.edges.map(({ node }) => (
<<<<<<< HEAD
                    <ClassCardMedium
                      key={node.id}
=======
                    <RecentClassCardMedium
>>>>>>> styling fixes
                      node={node}
                      href={`/class/${node.id}`}
                      teachers={data.classroom.teachersConnection.edges}
                    />
                  ))
                )}
              </ClassroomClasses>
            </ClassroomRow>
          )
        }
        default: {
          return null
        }
      }
    }}
  </Query>
))
