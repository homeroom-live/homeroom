import React from 'react'
import styled from 'styled-components'
import moment from 'moment-timezone'

import { FlexRow } from 'components/FlexRow'
import { FlexCol } from 'components/FlexCol'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { Header } from 'components/Header'
import { Player } from 'components/Player'
import { Icon } from 'components/Icon'

import { shadow, spacing, colors } from 'utils/theme'
import userGrayIcon from 'static/assets/icons/ui/user-gray.svg'
import clockGrayIcon from 'static/assets/icons/ui/clock-gray.svg'
import calendarGrayIcon from 'static/assets/icons/ui/calendar-gray.svg'

const inlineStyles = () => `
  border: none;
  border-bottom: 1px solid ${colors.grayLighter};
  border-radius: 0;
`

const ClassContainer = styled(Link)`
  ${props => (props.inline ? inlineStyles() : shadow())};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${spacing.regular};
  text-decoration: none;
  color: transparent;
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
// max-width: 256px;
// max-height: 144px;
const ClassTitle = styled(Header)`
  &:hover {
    text-decoration: underline;
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

export const ClassCardMedium = ({ node, teacher, href, ...props }) => (
  <ClassContainer href={href} {...props}>
    <ClassVideo src="http://techslides.com/demos/sample-videos/small.mp4" />
    <ClassMeta>
      <Link href={'test' || teacher.url} weight="bold" size="small">
        {'Teacher Name' || teacher.name}
      </Link>
      <ClassTitle margin="0">
        {node.name} {/*<TextStyle color="primary">${node.price}</TextStyle>*/}
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
  </ClassContainer>
)
