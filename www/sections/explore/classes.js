import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Components

import { Container, Row, Col } from 'reactstrap'
import { FlexCol } from '../../components/FlexCol'
import { Heading } from '../../components/Heading'
import { NavButton } from '../../components/NavButton'
import { Loading } from '../../components/Loading'
import { EmptyState } from '../../components/EmptyState'
import { Icon } from '../../components/Icon'
import { ClassCard } from '../../components/ClassCard'

// Icons

import iconFile from '../../static/assets/icons/ui/file.svg'
import iconGraphBar from '../../static/assets/icons/ui/graph-bar.svg'
import iconClock from '../../static/assets/icons/ui/clock.svg'
import iconVideo from '../../static/assets/icons/ui/video.svg'
import iconBuildingGray from '../../static/assets/icons/ui/building-gray.svg'

// Styles

import { spacing } from '../../utils/spacing'

const iconStyles = {
  padding: 0,
  paddingRight: spacing.small,
}

const buttonStyles = {
  paddingTop: spacing.regular,
  paddingBottom: spacing.regular,
}

// Explore

const classes = [
  {
    name: 'Live',
    icon: iconGraphBar,
    identifier: 'live',
    query: gql`
      query {
        classes: liveClasses {
          count
          classes {
            id
          }
        }
      }
    `,
  },
  {
    name: 'Upcoming',
    icon: iconClock,
    identifier: 'upcoming',
    query: gql`
      query {
        classes: liveClasses {
          count
          classes {
            id
          }
        }
      }
    `,
  },
  {
    name: 'Recorded',
    icon: iconVideo,
    identifier: 'recorded',
    query: gql`
      query {
        classes: liveClasses {
          count
          classes {
            id
          }
        }
      }
    `,
  },
  {
    name: 'My Classes',
    icon: iconFile,
    identifier: 'my',
    query: gql`
      query {
        classes: liveClasses {
          count
          classes {
            id
          }
        }
      }
    `,
  },
]

// Navigation

export const Classes = withRouter(
  class Classes extends React.Component {
    getSelected = () => {
      const query = this.props.router.query
      const selected = classes.find(
        ({ identifier }) => identifier === query.selection,
      )

      if (!selected) {
        return classes[0]
      } else {
        return selected
      }
    }

    generateSelectionURL = identifier => {
      return `/explore/${identifier}`
    }

    render() {
      return (
        <Container>
          <Row style={{ marginTop: spacing.medium }}>
            <Col
              sm={{ size: 12 }}
              md={{ size: 4 }}
              lg={{ size: 3 }}
              style={{ marginBottom: spacing.medium }}
            >
              <FlexCol>
                {classes.map(cls => (
                  <Link
                    href={this.generateSelectionURL(cls.identifier)}
                    key={cls.name}
                    prefetch
                    passHref
                  >
                    <NavButton css={buttonStyles}>
                      <Icon src={cls.icon} css={iconStyles} />
                      {cls.name}
                    </NavButton>
                  </Link>
                ))}
              </FlexCol>
            </Col>

            <Col sm={{ size: 12 }} md={{ size: 8 }} lg={{ size: 9 }}>
              <Container>
                <Heading text={this.getSelected().name} />
              </Container>
              <Query
                query={this.getSelected().query}
                notifyOnNetworkStatusChange
              >
                {({ networkStatus, data }) => {
                  switch (networkStatus) {
                    case 1: {
                      return <Loading />
                    }
                    case 7: {
                      return (
                        <FlexCol css={{ marginBottom: spacing.xlarge }}>
                          {data.classes.classes.map(Class => (
                            <ClassCard {...Class} key={Class.id} />
                          ))}

                          {data.classes.count === 0 && (
                            <EmptyState
                              icon={iconBuildingGray}
                              text={'No classes found... for now!'}
                            />
                          )}
                        </FlexCol>
                      )
                    }
                  }
                }}
              </Query>
            </Col>
          </Row>
        </Container>
      )
    }
  },
)
