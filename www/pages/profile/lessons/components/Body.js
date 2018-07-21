import React, { Fragment } from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { IconHeader } from 'components/IconHeader'
import { Button } from 'components/Button'
import { EmptyState } from 'components/EmptyState'
import { ClassCardLarge } from 'components/ClassCard'

import { colors, spacing, outline, borderRadius } from 'utils/theme'
import iconVideoGray from 'static/assets/icons/ui/video-gray.svg'
import iconVideo from 'static/assets/icons/ui/video.svg'

const Container = styled.section`
  padding: ${spacing.medium};
  margin-bottom: ${spacing.medium};
`
const SectionCol = styled(FlexCol)`
  ${outline()};
`
const LessonCardLarge = styled(ClassCardLarge)`
  max-width: 33.333333333333333%;
`
const SectionRow = styled(FlexRow)`
  flex-wrap: wrap;
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
const NewLessonButton = styled(Button)`
  margin-left: auto;
`
const StickyHeader = styled(IconHeader)`
  position: sticky;
  top: 0;
  z-index: 4;
  background: ${colors.white};
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
`

export const Body = ({ query, data }) => (
  <Container>
    <SectionCol>
      <StickyHeader src={iconVideo} value="Lessons">
        <NewLessonButton color="primary">New Lesson</NewLessonButton>
      </StickyHeader>
      <SectionRow>
        {data.lessons.length === 0 ? (
          <EmptyState
            src={iconVideoGray}
            value="There aren’t any lessons right now!"
          />
        ) : (
          <Fragment>
            {data.lessons.map(node => (
              <LessonCardLarge
                node={node}
                key={node.id}
                href={`/profile/lessons/${node.id}`}
              />
            ))}
            <ShowMoreButton onClick={query} color="tertiary">
              Show More
            </ShowMoreButton>
          </Fragment>
        )}
      </SectionRow>
    </SectionCol>
  </Container>
)
