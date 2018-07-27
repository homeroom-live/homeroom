import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'

// Components

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Text } from 'components/Text'
import { TextStyle } from 'components/TextStyle'
import { Thumbnail } from 'components/Thumbnail'

// Utils

import { colors, spacing } from 'utils/theme'
const getTimeSinceSent = createdAt => {
  const createdAtTime = new Date(createdAt).getTime()
  const nowTime = Date.now()
  const elapsed = nowTime - createdAtTime
  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerMonth = msPerDay * 30
  const msPerYear = msPerDay * 365

  if (elapsed < msPerMinute) {
    const seconds = Math.round(elapsed / 1000)
    return seconds > 0 ? `${seconds}s` : `0s`
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + 'm'
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + 'hr'
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + 'd'
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + 'mo'
  } else {
    return Math.round(elapsed / msPerYear) + 'yr'
  }
}

// Elements

const getBorderLeft = props => {
  if (props.isTeacher) {
    return `4px solid ${colors.primary}`
  } else if (props.isViewer) {
    return `4px solid ${colors.secondary}`
  } else {
    return null
  }
}
const Container = styled(FlexRow)`
  align-items: flex-start;
  flex-shrink: 0;
  padding: ${spacing.regular};
  border-left: ${getBorderLeft};

  &:hover,
  &:focus {
    background: ${colors.grayLightest};
  }
`
const ThumbnailCol = styled(FlexCol)`
  flex: 0;
  margin-right: ${spacing.regular};
`
const Timestamp = styled(TextStyle)`
  margin-left: auto;
`

// Fragments

const MessageFragment = gql`
  fragment ChatMessage on Message {
    id
    createdAt
    text
    is_viewer_message
    is_teacher_message
    sender {
      id
      name
      username
      picture {
        id
      }
    }
  }
`

const Message = ({ node }) => (
  <Container
    isTeacher={node.is_teacher_message}
    isViewer={node.is_viewer_message}
  >
    <ThumbnailCol>
      <Thumbnail src={'test' || node.sender.picture} />
    </ThumbnailCol>

    <FlexCol>
      <FlexRow>
        <Text
          size="small"
          weight="bold"
          margin="0"
          color={node.is_teacher_message ? 'primary' : 'secondary'}
        >
          {node.sender.name || node.sender.username}
        </Text>
        <Timestamp size="small" color="gray">
          {getTimeSinceSent(node.createdAt)}
        </Timestamp>
      </FlexRow>

      <FlexRow>
        <Text margin="0">{node.text}</Text>
      </FlexRow>
    </FlexCol>
  </Container>
)

export { Message, MessageFragment }
