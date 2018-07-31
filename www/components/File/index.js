import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { FlexRow } from 'components/FlexRow'
import { Status } from 'components/Status'

import { spacing, opacity, colors } from 'utils/theme'
import iconDownload from 'static/assets/icons/ui/download.svg'
import iconRemove from 'static/assets/icons/ui/x-circle.svg'

const DownloadWrapper = styled.a`
  position: relative;
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
    cursor: pointer;
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
const RemoveIcon = styled(DownloadIcon)`
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

export class File extends React.Component {
  handleRemove = e => {
    e.preventDefault()
    this.props.onRemove(this.props.name)
  }

  render() {
    const { name, url, updatedAt, status, onRemove } = this.props

    return (
      <DownloadWrapper href={url} download={name} target="_blank">
        <DownloadIcon src={iconDownload} />

        <Filename size="small" weight="bold" margin="0">
          {name}
        </Filename>

        <MetaRow>
          {updatedAt && (
            <Text size="small" weight="medium" margin="0">
              {moment(updatedAt).format('M/D/YY')}
            </Text>
          )}

          {onRemove && (
            <RemoveIcon src={iconRemove} onClick={this.handleRemove} />
          )}
        </MetaRow>
        {status && <Status status={status} inline />}
      </DownloadWrapper>
    )
  }
}
