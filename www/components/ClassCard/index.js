import React from 'react'
import styled from 'styled-components'
import moment from 'moment-timezone'

import { FlexRow } from 'components/FlexRow'
import { FlexCol } from 'components/FlexCol'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { Header } from 'components/Header'
import { ProfileLinks } from 'components/ProfileLinks'
import { Player } from 'components/Player'

import { spacing, colors } from 'utils/theme'

const ClassCardContainer = styled(Link)`
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
const ClassImage = styled.img`
  object-fit: contain;
  border-radius: 4px;
  width: 100%;
  max-width: 128px;
  max-height: 72px;
  margin-right: ${spacing.regular};
  background: ${colors.black};
`
const ClassTitle = styled(Header)`
  &:hover {
    text-decoration: underline;
  }
`
const ClassMeta = styled(FlexCol)`
  width: initial;
`
const ClassMetaStatsRow = styled(FlexRow)`
  flex-wrap: wrap;
`
const ClassMetaItem = styled(Text)`
  display: flex;
  align-items: center;
  margin-right: ${spacing.small};
  margin-top: 0;
  letter-spacing: 0.2px;
`

export const ClassCardSmall = ({ node, teachers, href, className }) => (
  <ClassCardContainer href={href} className={className}>
    <ClassImage src="https://img.huffingtonpost.com/asset/585be1aa1600002400bdf2a6.jpeg?ops=scalefit_970_noupscale" />
    <ClassMeta>
      <ProfileLinks users={teachers} />
      <ClassTitle size="medium" margin="0">
        {node.name}
      </ClassTitle>
      <ClassMetaStatsRow>
        <ClassMetaItem color="gray" weight="bold" size="xsmall">
          {0} Students
        </ClassMetaItem>
        <ClassMetaItem color="gray" weight="bold" size="xsmall">
          {moment(node.schedule).format('M/D/YY')}
        </ClassMetaItem>
        <ClassMetaItem color="gray" weight="bold" size="xsmall">
          {moment(node.schedule)
            .tz('America/New_York')
            .format('LT z')}
        </ClassMetaItem>
      </ClassMetaStatsRow>
    </ClassMeta>
  </ClassCardContainer>
)

const ClassCardMediumContainer = styled(Link)`
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
const ClassVideo = styled(Player)`
  object-fit: contain;
  border-radius: 4px;
  width: 100%;
  margin-bottom: ${spacing.small};
  background: ${colors.black};
`
export const ClassCardMedium = ({ node, teachers, href, className }) => (
  <ClassCardMediumContainer href={href} className={className}>
    <ClassVideo src="http://techslides.com/demos/sample-videos/small.mp4" />
    <ClassMeta>
      <ProfileLinks users={teachers} />
      <ClassTitle size="regular" margin="0">
        {node.name}
      </ClassTitle>
      <ClassMetaStatsRow>
        <ClassMetaItem color="gray" weight="bold" size="xsmall">
          {0} Students
        </ClassMetaItem>
        <ClassMetaItem color="gray" weight="bold" size="xsmall">
          {moment(node.schedule).format('M/D/YY')}
        </ClassMetaItem>
        <ClassMetaItem color="gray" weight="bold" size="xsmall">
          {moment(node.schedule)
            .tz('America/New_York')
            .format('LT z')}
        </ClassMetaItem>
      </ClassMetaStatsRow>
    </ClassMeta>
  </ClassCardMediumContainer>
)

const ClassCardLargeContainer = styled(Link)`
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
const ClassVideoLarge = styled(Player)`
  object-fit: contain;
  max-height: 300px;
  margin-bottom: ${spacing.small};
  border-radius: 4px;
  background: ${colors.black};
`

export const ClassCardLarge = ({ node, teachers, href, className, size }) => (
  <ClassCardLargeContainer href={href} className={className}>
    <ClassVideoLarge src="http://techslides.com/demos/sample-videos/small.mp4" />
    <ClassMeta>
      <ProfileLinks users={teachers} />
      <ClassTitle size={size} margin="0">
        {node.name}
      </ClassTitle>
      <ClassMetaStatsRow>
        <ClassMetaItem color="gray" weight="bold" size="xsmall">
          {0} Students
        </ClassMetaItem>
        <ClassMetaItem color="gray" weight="bold" size="xsmall">
          {moment(node.schedule).format('M/D/YY')}
        </ClassMetaItem>
        <ClassMetaItem color="gray" weight="bold" size="xsmall">
          {moment(node.schedule)
            .tz('America/New_York')
            .format('LT z')}
        </ClassMetaItem>
      </ClassMetaStatsRow>
    </ClassMeta>
  </ClassCardLargeContainer>
)
