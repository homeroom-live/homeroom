import React, { Fragment } from 'react'
import { Query } from 'apollo-client'
import gql from 'graphql-tag'
import styled from 'styled-components'

// Components

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { IconHeader } from 'components/IconHeader'
import { Button } from 'components/Button'
import { EmptyState } from 'components/EmptyState'
import { ClassCardLarge } from 'components/ClassCard'

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
const LessonCardLarge = styled(ClassCardLarge)`
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
  render() {
    const { query, label, icon, id } = this.props

    const lessons = []

    return (
      <SectionCol id={id}>
        <StickyHeader src={icon} value={label} />
        <SectionRow>
          {lessons.length === 0 ? (
            <EmptyState
              src={iconVideoGray}
              value="There aren’t any lessons right now!"
            />
          ) : (
            <Fragment>
              {lessons.map(node => (
                <LessonCardLarge
                  node={node}
                  key={node.id}
                  href={`/${node.user.username}/${node.id}`}
                />
              ))}
              <ShowMoreButton onClick={query} color="tertiary">
                Show More
              </ShowMoreButton>
            </Fragment>
          )}
        </SectionRow>
      </SectionCol>
    )
  }
}
