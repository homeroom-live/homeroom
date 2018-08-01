import React, { Fragment } from 'react'
import { NetworkStatus } from 'apollo-client'
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
const LessonCardLarge = styled(LessonCard.LessonCard)`
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
  align-items: stretch;
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
  handleFetchMore = (fetchMore, data) => e => {
    e.preventDefault()
    fetchMore({
      variables: {},
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          ...previousResult,
        }
      },
    })
  }

  renderLessons = () => {
    const { networkStatus, data, fetchMore } = this.props
    if (data.length === 0 || networkStatus.loading) {
      return (
        <EmptyState src={iconVideoGray} value="Stay put, lessons incoming!" />
      )
    }

    switch (networkStatus) {
      case NetworkStatus.fetchMore:
      case NetworkStatus.ready: {
        return (
          <Fragment>
            {data.map(({ node }) => (
              <LessonCardLarge
                node={node}
                key={node.id}
                href={`/${node.teacher.username}/${node.id}`}
              />
            ))}
            <ShowMoreButton
              color="tertiary"
              status={{
                loading: networkStatus === NetworkStatus.fetchMore,
              }}
              onClick={this.handleFetchMore(fetchMore, data)}
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
  }

  render() {
    const { id, label, icon } = this.props

    return (
      <SectionCol id={id}>
        <StickyHeader src={icon} value={label} />
        <SectionRow>{this.renderLessons()}</SectionRow>
      </SectionCol>
    )
  }
}
