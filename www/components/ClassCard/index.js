import React from 'react'
import Link from 'next/link'
import moment from 'moment-timezone'

// Components

import { FlexCol } from '../FlexCol'
import { FlexRow } from '../FlexRow'
import { Text } from '../Text'
import { Video } from '../Video'
import { Image } from '../Image'
import { Price } from '../Price'
import { Icon } from '../Icon'
import { ListItem } from '../ListItem'
// import { formatStartTime } from './utils'

import noVideo from '../../static/assets/images/no-video.jpg'

// Icons

// import editIcon from '../../static/assets/icons/ui/edit.svg'
import liveIcon from '../../static/assets/icons/ui/live.svg'
import userGrayIcon from '../../static/assets/icons/ui/user-gray.svg'
import clockGrayIcon from '../../static/assets/icons/ui/clock-gray.svg'
import calendarGrayIcon from '../../static/assets/icons/ui/calendar-gray.svg'

// Styles

import { spacing } from '../../utils/spacing'

// const editIconStyles = {
//   position: 'absolute',
//   right: '-30px',
//   top: 0,
//   height: '20px',
//   padding: 0,
//   opacity: '0.5',
//   ':hover': {
//     opacity: 1,
//   },
// }

const iconStyles = {
  height: '16px',
  padding: 0,
  paddingRight: spacing.xsmall,
  marginBottom: '4px',
}

const titleStyles = {
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '3px',
}

// height = 2 lines of text
// const descriptionStyles = {
//   overflow: 'hidden',
//   maxHeight: `${16 * 1.3 * 2}px`,
//   margin: 0,
// }

const containerMobileStyles = {
  '@media(max-width: 992px)': {
    flexDirection: 'column',
  },
}

const classMetaStyles = {
  width: '100%',
  marginLeft: spacing.regular,

  '@media(max-width: 992px)': {
    marginLeft: 0,
    marginTop: spacing.regular,
  },
}

const liveIconStyles = {
  position: 'absolute',
  top: spacing.regular,
  left: spacing.regular,
  height: '16px',
  padding: 0,
  zIndex: 10,
}

// ClassCard

export const ClassCard = ({
  id,
  name,
  description,
  video,
  price,
  duration,
  schedule,
  teacher,
  live,
}) => (
  <ListItem css={containerMobileStyles}>
    <FlexCol css={{ flex: 0 }}>
      {live && <Icon src={liveIcon} css={liveIconStyles} />}
      {video && video.url ? (
        <Video src={video ? video.url : ''} />
      ) : (
        <Image src={noVideo} />
      )}
    </FlexCol>

    <FlexCol css={classMetaStyles}>
      <Text weight="bold" size="medium" css={titleStyles}>
        <span style={{ marginRight: 'auto' }}>{name}</span>
        <Price value={price || 'free'} css={{ marginLeft: spacing.regular }} />
      </Text>

      <FlexRow css={{ marginTop: spacing.xsmall }}>
        <Text
          size="small"
          color="grayDarker"
          weight="bold"
          css={{ marginRight: '20px' }}
        >
          <Icon src={userGrayIcon} css={iconStyles} />
          0
        </Text>

        <Text
          size="small"
          color="grayDarker"
          weight="bold"
          css={{ marginRight: '20px' }}
        >
          <Icon src={calendarGrayIcon} css={iconStyles} />
          {moment(schedule).format('M/D/YY')}
        </Text>

        <Text
          size="small"
          color="grayDarker"
          weight="bold"
          css={{ marginRight: '20px' }}
        >
          <Icon src={clockGrayIcon} css={iconStyles} />
          {moment(schedule)
            .tz('America/New_York')
            .format('LT z')}
        </Text>
      </FlexRow>

      <Link href={`/user/${teacher.username}`}>
        <Text
          size="small"
          weight="bold"
          css={{ margin: 0, width: 'fit-content' }}
        >
          {teacher.name}
        </Text>
      </Link>
    </FlexCol>
  </ListItem>
)
