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
import { VideoPicker } from 'components/VideoPicker'
import { withEditable } from 'hocs/withEditable'

import { spacing, outline, shadow, colors } from 'utils/theme'
import userGrayIcon from 'static/assets/icons/ui/user-gray.svg'
import clockGrayIcon from 'static/assets/icons/ui/clock-gray.svg'
import calendarGrayIcon from 'static/assets/icons/ui/calendar-gray.svg'

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
  margin-top: ${spacing.regular};
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

const ClassInformationCol = styled(FlexCol)`
  margin: ${spacing.medium};
`
const ClassHeader = styled(FlexCol)`
  ${outline()};
  align-items: flex-start;
  padding: ${spacing.regular};
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
              <Breadcrumb
                href={`/dashboard/classrooms/classroom/${
                  data.class.classroom.id
                }`}
              >
                Back to {data.class.classroom.name}
              </Breadcrumb>
              <ClassHeader>
                <VideoPicker value="https://img.huffingtonpost.com/asset/585be1aa1600002400bdf2a6.jpeg?ops=scalefit_970_noupscale" />
                <ClassMeta>
                  <Link
                    href={data.class.classroom.teacher.url || ''}
                    weight="bold"
                    size="small"
                  >
                    {'Teacher Name' || data.class.classroom.teacher.name}
                  </Link>
                  <EditableClassTitle
                    value={data.class.name}
                    handleSave={() => {}}
                  />
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
              </ClassHeader>
              <main>
                <div>
                  <h4>Description</h4>
                  <p>{data.class.description}</p>
                </div>
                <div>
                  <h4>Price</h4>
                  <p>{data.class.price}</p>
                </div>
                <div>
                  <h4>Live</h4>
                  <p>
                    {data.class.live && 'Your classroom is LIVE!'}
                    {!data.class.live && 'Your classroom is offline...'}
                  </p>
                </div>
              </main>
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
