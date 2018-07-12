import React from 'react'
import styled from 'styled-components'
import moment from 'moment-timezone'

import { FlexRow } from 'components/FlexRow'
import { FlexCol } from 'components/FlexCol'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { Header } from 'components/Header'
import { TextStyle } from 'components/TextStyle'
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
const ClassImage = styled.img`
  object-fit: contain;
  border-radius: 4px;
  width: 100%;
  max-width: 256px;
  max-height: 144px;
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

export const ClassCard = ({ node, teachers, href, ...props }) => (
  <ClassContainer href={href} {...props}>
    <ClassImage src="https://img.huffingtonpost.com/asset/585be1aa1600002400bdf2a6.jpeg?ops=scalefit_970_noupscale" />
    <ClassMeta>
      {teachers.map((node, index) => (
        <Link
          key={node.id}
          href={'TEST' || node.url}
          size="small"
          weight="bold"
        >
          {node.name}
          {index > 0 && index !== teachers.length - 1 && ', '}
        </Link>
      ))}
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
