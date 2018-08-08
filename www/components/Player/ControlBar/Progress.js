import React from 'react'
import styled from 'styled-components'

import { Text } from 'components/Text'

import { formatTime } from '../utils'
import { spacing, opacity } from 'utils/theme'

const ProgressText = styled(Text)`
  margin: 0;
  margin-right: ${spacing.regular};
  opacity: ${opacity};
`

export const Progress = ({ video }) => (
  <div>
    <ProgressText size="small" weight="bold" color="white">{`${formatTime(
      video.currentTime,
      video.duration,
    )}/${formatTime(video.duration)}`}</ProgressText>
  </div>
)
