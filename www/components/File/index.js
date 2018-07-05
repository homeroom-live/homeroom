import React from 'react'
import glamorous from 'glamorous'
import moment from 'moment'
// import { propType } from 'graphql-anywhere'
// import gql from 'graphql-tag'

import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { FlexRow } from 'components/FlexRow'

import { spacing } from 'utils/spacing'
import { colors, shadow } from 'utils/colors'
import iconDownload from 'static/assets/icons/ui/download.svg'
import iconX from 'static/assets/icons/ui/x-circle.svg'

const Container = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  padding: spacing.regular,
  marginTop: spacing.small,
  opacity: 0.5,
  ...shadow,
  ':hover': {
    opacity: 1,
    boxShadow: colors.shadowActive,
  },
  ':focus': {
    opacity: 1,
    boxShadow: colors.shadowActive,
  },
})

const iconStyles = {
  padding: 0,
  height: '16px',
  width: '16px',
  marginRight: spacing.small,
}

const filenameStyles = {
  flex: 1,
  margin: 0,
  marginRight: spacing.medium,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  textTransform: 'initial',
}

// NOTE: runs into errors with html file uploads with mismatched props
// static fragments = {
//   file: gql`
//     fragment FileFile on File {
//       id
//       name
//       url
//       updatedAt
//     }
//   `
// }
//
// static propTypes = {
//   file: propType(File.fragments.file)
// }

export const File = ({ name, url, updatedAt, onRemoveClick }) => (
  <Container>
    <a href={url} download={name} target="_blank" style={{ display: 'flex' }}>
      <Icon src={iconDownload} css={iconStyles} />
    </a>

    <Text size="xsmall" weight="bold" css={filenameStyles}>
      {name}
    </Text>

    <FlexRow css={{ marginLeft: 'auto', flex: 0 }}>
      {updatedAt && (
        <Text size="xsmall" weight="medium" css={{ margin: 0 }}>
          {moment(updatedAt).format('M/D/YY')}
        </Text>
      )}

      {onRemoveClick && (
        <Icon
          src={iconX}
          css={{ ...iconStyles, marginLeft: spacing.medium }}
          onClick={onRemoveClick(name)}
        />
      )}
    </FlexRow>
  </Container>
)
