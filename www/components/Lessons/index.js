import React, { Fragment } from 'react'
import { NetworkStatus } from 'apollo-client'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

// Components

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { IconHeader } from 'components/IconHeader'
import { Button } from 'components/Button'
import { EmptyState } from 'components/EmptyState'
import * as LessonCard from 'components/LessonCard'

// Theme

import { colors, spacing, shadow, borderRadius } from 'utils/theme'

// Icons

import iconVideoGray from 'static/assets/icons/ui/video-gray.svg'

// Elements

const StickyHeader = styled(IconHeader)`
  position: sticky;
  top: 0;
  z-index: 4;
  background: ${colors.white};
  border-top-right-radius: ${borderRadius};
  border-top-left-radius: ${borderRadius};
`
const LessonCardLarge = styled(LessonCard.LessonCardLarge)`
  max-width: 33.333333333333333%;
  &:first-child,
  &:nth-child(2) {
    max-width: 50%;
  }
`
const SectionCol = styled(FlexCol)`
  ${shadow()};
  margin-bottom: ${spacing.medium};
  scroll-behavior: smooth;
`
const SectionRow = styled(FlexRow)`
  flex-wrap: wrap;
  scroll-behavior: smooth;
`
const ShowMoreButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 1px solid ${colors.grayLighter};
`

// Lessons

export class Lessons extends React.Component {
  getQuery = query => gql`
    query {
      viewer {
        user {
          id
        }
      }
    }
    ${this.props.query}
    ${LessonCard.fragments.card}
  `

  handleFetchMore = (fetchMore, data) => e => {
    e.preventDefault()
  }

  render() {
    const { id, label, icon } = this.props

    return (
      <SectionCol id={id}>
        <StickyHeader src={icon} value={label} />
        <SectionRow>
          <Query query={this.getQuery()} notifyOnNetworkStatusChange>
            {({ networkStatus, data, fetchMore }) => {
              switch (networkStatus) {
                case NetworkStatus.loading: {
                  return (
                    <EmptyState
                      src={iconVideoGray}
                      value="Stay put, lessons incoming!"
                    />
                  )
                }

                case NetworkStatus.fetchMore:
                case NetworkStatus.ready: {
                  return (
                    <Fragment>
                      {[].map(node => (
                        <LessonCardLarge
                          node={node}
                          key={node.id}
                          href={`/${node.user.username}/${node.id}`}
                        />
                      ))}
                      <ShowMoreButton
                        onClick={this.handleFetchMore(fetchMore, data)}
                        color="tertiary"
                      >
                        Show More
                      </ShowMoreButton>
                    </Fragment>
                  )
                }

                default: {
                  return null
                }
              }
            }}
          </Query>
        </SectionRow>
      </SectionCol>
    )
  }
}
