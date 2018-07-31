import React from 'react'
import styled from 'styled-components'

import { Icon } from 'components/Icon'
import { Loading } from 'components/Loading'

import iconXCircleRed from 'static/assets/icons/ui/x-circle-red.svg'
import iconCheckGreen from 'static/assets/icons/ui/check-green.svg'

const StatusContainer = styled.div`
  position: ${props => (props.inline ? 'initial' : 'absolute')};
  top: -24px;
  right: 0;
`

export class Status extends React.Component {
  state = {
    showSuccess: false,
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.status &&
      (!prevProps.status.data || prevProps.status.loading) &&
      (this.props.status && this.props.status.data)
    ) {
      this.toggleShowSuccess()
    }
  }

  toggleShowSuccess = () => {
    this.setState({ showSuccess: true })
    setTimeout(() => {
      this.setState({ showSuccess: false })
    }, 3000)
  }

  render() {
    const { status, inline } = this.props
    return (
      <StatusContainer inline={inline}>
        {status.loading && <Loading color={'tertiary'} height="16px" />}
        {status.error && <Icon src={iconXCircleRed} height="16px" />}
        {this.state.showSuccess && <Icon src={iconCheckGreen} height="16px" />}
      </StatusContainer>
    )
  }
}
