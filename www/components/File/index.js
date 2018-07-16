import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
// import { propType } from 'graphql-anywhere'
// import gql from 'graphql-tag'

import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { FlexRow } from 'components/FlexRow'

import { spacing, opacity, colors, shadow } from 'utils/theme'
import iconDownload from 'static/assets/icons/ui/download.svg'
import iconX from 'static/assets/icons/ui/x-circle.svg'

// ${shadow()};
const Container = styled.div``
const DownloadWrapper = styled.a`
  display: flex;
  align-items: center;
  padding: ${spacing.regular};
  opacity: ${opacity};
  text-decoration: none;
  color: transparent;
  &:hover,
  &:focus {
    opacity: 1;
    background: ${colors.grayLightest};
  }
`
const DownloadIcon = styled(Icon)`
  height: 16px;
  width: 16px;
  margin-right: ${spacing.small};
  margin-top: -4px;
`
const Filename = styled(Text)`
  flex: 1;
  margin: 0;
  margin-right: ${spacing.medium};
  margin-left: ${spacing.small};
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: initial;
`
const MetaRow = styled(FlexRow)`
  flex: 0;
  margin-left: auto;
`
const XIcon = styled(DownloadIcon)`
  margin-left: ${spacing.medium};
`

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

export const File = ({ name, url, updatedAt, onRemove }) => (
  <DownloadWrapper href={url} download={name} target="_blank">
    <DownloadIcon src={iconDownload} />

    <Filename size="small" weight="bold">
      {name}
    </Filename>

    <MetaRow>
      {updatedAt && (
        <Text size="small" weight="medium" margin="0">
          {moment(updatedAt).format('M/D/YY')}
        </Text>
      )}

      {onRemove && (
        <XIcon
          src={iconX}
          onClick={e => {
            e.preventDefault()
            onRemove()
          }}
        />
      )}
    </MetaRow>
  </DownloadWrapper>
)
