import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import moment from 'moment-timezone'

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
      schedule
      teacher {
        id
        name
        live {
          id
          name
        }
      }
    }
  `,
}

// Elements

const LessonCardContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: ${spacing.regular};
  text-decoration: none;
  color: transparent;
  border-radius: 0;
  &:hover {
    color: transparent;
    text-decoration: none;
    background: ${colors.grayLightest};
  }
`
const LessonImage = styled.img`
  object-fit: contain;
  border-radius: 4px;
  width: 100%;
  max-width: 128px;
  max-height: 72px;
  margin-right: ${spacing.regular};
  background: ${colors.black};
`
const LessonTitle = styled(Header)`
  &:hover {
    text-decoration: underline;
  }
`
const LessonMeta = styled(FlexCol)`
  width: initial;
`
const LessonMetaStatsRow = styled(FlexRow)`
  flex-wrap: wrap;
`
const LessonMetaItem = styled(Text)`
  display: flex;
  align-items: center;
  margin-right: ${spacing.small};
  margin-top: 0;
  letter-spacing: 0.2px;
`

const LessonCardSmall = ({ node, teachers, href, className }) => (
  <LessonCardContainer href={href} className={className}>
    <LessonImage src="https://img.huffingtonpost.com/asset/585be1aa1600002400bdf2a6.jpeg?ops=scalefit_970_noupscale" />
    <LessonMeta>
      <LessonTitle size="medium" margin="0">
        {node.name}
      </LessonTitle>
      <LessonMetaStatsRow>
        {/* <LessonMetaItem color="gray" weight="bold" size="xsmall">
          {0} Students
        </LessonMetaItem> */}
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

const LessonCardMediumContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  flex-basis: 30%;
  padding: ${spacing.regular};
  color: transparent;
  text-decoration: none;
  &:hover {
    color: transparent;
    text-decoration: none;
    background: ${colors.grayLightest};
  }
`
const LessonVideo = styled(Player)`
  object-fit: contain;
  border-radius: 4px;
  width: 100%;
  margin-bottom: ${spacing.small};
  background: ${colors.black};
`

const LessonCardMedium = ({ node, teachers, href, className }) => (
  <LessonCardMediumContainer href={href} className={className}>
    {/* <LessonVideo src="http://techslides.com/demos/sample-videos/small.mp4" /> */}
    <LessonMeta>
      <LessonTitle size="regular" margin="0">
        {node.name}
      </LessonTitle>
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
  </LessonCardMediumContainer>
)

const LessonCardLargeContainer = styled(Link)`
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
  }
`
const LessonVideoLarge = styled(Player)`
  object-fit: contain;
  max-height: 300px;
  margin-bottom: ${spacing.small};
  border-radius: 4px;
  background: ${colors.black};
`

const LessonCardLarge = ({ node, href, className }) => (
  <LessonCardLargeContainer href={href} className={className}>
    {/* <LessonVideoLarge src={node.video.url} /> */}
    <LessonMeta>
      <Link
        key={node.teacher.id}
        href={`/user/${node.teacher.username}`}
        size="small"
        weight="bold"
      >
        {node.teacher.name}
      </Link>
      <LessonTitle size="medium" margin="0">
        {node.name}
      </LessonTitle>
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
  </LessonCardLargeContainer>
)

export { LessonCardSmall, LessonCardMedium, LessonCardLarge, fragments }
