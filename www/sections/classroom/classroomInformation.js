import React, { Fragment } from 'react'
import { default as Router, withRouter } from 'next/router'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styled from 'styled-components'

// Components

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { Text } from 'components/Text'
import { Thumbnail } from 'components/Thumbnail'
import { Link } from 'components/Link'
import { Loading } from 'components/Loading'
import { Icon } from 'components/Icon'

import videoIcon from 'static/assets/icons/ui/video.svg'
import { STATUS } from 'utils/constants'
import { outline, shadow, colors } from 'utils/colors'
import { spacing } from 'utils/spacing'

// GraphQL

const classroomQuery = gql`
  query ClassroomQuery($classroomId: ID!) {
    classroom(id: $classroomId) {
      id
      name
      description
      teacher {
        id
        name
        url
        followersConnection {
          aggregate {
            count
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

const ClassroomHeader = styled(FlexRow)`
  ${outline()};
  align-items: center;
  padding: ${spacing.regular};
  margin-bottom: ${spacing.regular};
`

const ClassroomImage = styled(FlexCol)`
  width: initial;
  margin-right: ${spacing.small};
`

const ClassesHeader = styled(FlexRow)`
  ${outline()};
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  align-items: center;
  padding: ${spacing.regular};
`
const ClassesIcon = styled(Icon)`
  padding: 0;
  margin-bottom: 2px;
  margin-right: ${spacing.small};
`

const Class = styled(FlexRow)`
  ${shadow()};
  padding: ${spacing.regular};
  border-radius: 0;
  border-top: 0px;
  cursor: pointer;
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

// Classroom Information

export const ClassroomInformation = withRouter(({ router }) => (
  <Query
    query={classroomQuery}
    variables={{ classroomId: router.query.classroomId }}
    notifyOnNetworkStatusChange
  >
    {({ networkStatus, data }) => {
      switch (networkStatus) {
        case STATUS.LOADING: {
          return <Loading />
        }
        case STATUS.READY: {
          console.log(data)
          return (
            <Container>
              <ClassroomHeader>
                <ClassroomImage>
                  <Thumbnail
                    src="https://janecanblogdotcom.files.wordpress.com/2014/09/ashley-square-profile.jpg"
                    size="xlarge"
                  />
                </ClassroomImage>
                <FlexCol>
                  <Header margin="0">{data.classroom.name}</Header>
                  <Link href={data.classroom.teacher.url || ''} weight="bold">
                    {'Test Name' || data.classroom.teacher.name}
                  </Link>
                  <Text weight="bold" color="gray">
                    {data.classroom.teacher.followersConnection.aggregate.count}{' '}
                    Subscribers
                  </Text>
                </FlexCol>
              </ClassroomHeader>

              <div>
                <ClassesHeader>
                  <ClassesIcon src={videoIcon} />
                  <Text weight="bold" margin="0">
                    Classes
                  </Text>
                  <Text weight="bold" margin="0 0 0 3px" color="gray">
                    {data.classroom.classesConnection.aggregate.count}
                  </Text>
                </ClassesHeader>

                {data.classroom.classesConnection.edges.map(({ node }) => (
                  <Class
                    key={node.id}
                    onClick={() =>
                      Router.push(
                        `/classroom/${data.classroom.id}/class/${node.id}`,
                      )
                    }
                  >
                    <ClassImage src="https://img.huffingtonpost.com/asset/585be1aa1600002400bdf2a6.jpeg?ops=scalefit_970_noupscale" />
                    <FlexCol>
                      <Header margin="0">{node.name}</Header>
                      <Link
                        href={`/classroom/${data.classroom.id}/class/${
                          node.id
                        }`}
                        weight="bold"
                      >
                        {'Teacher Name' || data.classroom.teacher.name}
                      </Link>
                      <Text weight="bold" color="gray">
                        {
                          data.classroom.teacher.followersConnection.aggregate
                            .count
                        }{' '}
                        Subscribers
                      </Text>
                    </FlexCol>
                  </Class>
                ))}
              </div>
            </Container>
          )
        }
        default: {
          return null
        }
      }
    }}
  </Query>
))
