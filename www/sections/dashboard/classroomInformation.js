import React from 'react'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import moment from 'moment-timezone'

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

import { colors, spacing, outline, shadow } from 'utils/theme'
import userGrayIcon from 'static/assets/icons/ui/user-gray.svg'
import clockGrayIcon from 'static/assets/icons/ui/clock-gray.svg'
import calendarGrayIcon from 'static/assets/icons/ui/calendar-gray.svg'
import videoIcon from 'static/assets/icons/ui/video.svg'

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

const ClassesCol = styled(FlexCol)`
  ${outline()};
  margin-top: ${spacing.medium};
`
const ClassesHeader = styled(FlexRow)`
  align-items: center;
  padding: ${spacing.regular};
  border-bottom: 1px solid ${colors.grayLighter};
`
const ClassesIcon = styled(Icon)`
  padding: 0;
  margin-bottom: 2px;
  margin-right: ${spacing.small};
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

const Class = ({ node, teacher }) => (
  <ClassRow>
    <ClassImage src="https://img.huffingtonpost.com/asset/585be1aa1600002400bdf2a6.jpeg?ops=scalefit_970_noupscale" />
    <ClassMeta>
      <Link href={'test' || teacher.url} weight="bold" size="small">
        {'Teacher Name' || teacher.name}
      </Link>
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
              <ClassroomHeader
                id={data.classroom.id}
                name={data.classroom.name}
                numberOfClasses={
                  data.classroom.classesConnection.aggregate.count
                }
                teacher={data.classroom.teacher}
              />

              <ClassesCol>
                <ClassesHeader>
                  <ClassesIcon src={videoIcon} />
                  <Text weight="bold" margin="0">
                    Classes
                  </Text>
                  <Text weight="bold" margin="0 0 0 3px" color="gray">
                    {data.classroom.classesConnection.aggregate.count}
                  </Text>
                </ClassesHeader>
                <div>
                  {data.classroom.classesConnection.edges.map(({ node }) => (
                    <Class
                      node={node}
                      key={node.id}
                      teacher={data.classroom.teacher}
                    />
                  ))}
                </div>
              </ClassesCol>
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
