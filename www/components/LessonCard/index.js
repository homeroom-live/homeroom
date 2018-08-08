import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import moment from 'moment-timezone'
import Router from 'next/router'

// Components

import { FlexRow } from 'components/FlexRow'
import { FlexCol } from 'components/FlexCol'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { Header } from 'components/Header'
import { Player } from 'components/Player'

// Utils

import { spacing, colors } from 'utils/theme'

// Fragments

const fragments = {
  card: gql`
    fragment LessonCard on Lesson {
      id
      name
      thumbnail {
        id
        url
      }
      premium
      schedule
      teacher {
        id
        name
        username
        live {
          id
          name
        }
      }
    }
  `,
}

// Elements

const LessonCardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 50%;
  padding: ${spacing.regular};
  color: transparent;
  text-decoration: none;
  &:hover {
    color: transparent;
    text-decoration: none;
    background: ${colors.grayLightest};
    cursor: pointer;
  }
`
const LessonTitle = styled(Header)`
  &:hover {
    text-decoration: underline;
  }
`
const LessonMeta = styled(FlexCol)`
  width: initial;
  margin-top: ${spacing.small};
  flex-shrink: 0;
`
const LessonMetaStatsRow = styled(FlexRow)`
  flex-wrap: wrap;
`
const LessonMetaItem = styled(Text)`
  display: flex;
  align-items: center;
  margin: 0;
  margin-right: ${spacing.small};
  letter-spacing: 0.2px;
`
const LessonVideo = styled(Player)`
  object-fit: contain;
  height: 280px;
  margin-bottom: ${spacing.small};
  border-radius: 4px;
  background: ${colors.black};
`

const LessonCard = ({ node, href, className }) => (
  <LessonCardContainer onClick={() => Router.push(href)} className={className}>
    <LessonVideo
      src={null} // node.live.url || node.vod.url
      poster={node.thumbnail ? node.thumbnail.url : ''}
    />
    <LessonMeta>
      <Link
        key={node.teacher.id}
        href={`/${node.teacher.username}`}
        size="small"
        weight="bold"
      >
        {node.teacher.name}
      </Link>
      <Link href={href}>
        <LessonTitle size="medium" margin="0" color="secondary">
          {node.name}
        </LessonTitle>
      </Link>
      <LessonMetaStatsRow>
        <LessonMetaItem color="gray" weight="bold" size="xsmall">
          {0} Students
        </LessonMetaItem>
        <LessonMetaItem color="gray" weight="bold" size="xsmall">
          {moment(node.schedule).format('M/D/YY')}
        </LessonMetaItem>
        <LessonMetaItem color="gray" weight="bold" size="xsmall">
          {moment(node.schedule)
            .tz('America/New_York')
            .format('LT z')}
        </LessonMetaItem>
      </LessonMetaStatsRow>
    </LessonMeta>
  </LessonCardContainer>
)

export { LessonCard, fragments }
