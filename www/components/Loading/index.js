import React from 'react'
import glamorous from 'glamorous'

import loadingIcon from '../../static/assets/icons/loading.svg'

const LoadingWrapper = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
})

export const Loading = ({ height, css }) => (
  <LoadingWrapper css={css}>
    <img
      src={loadingIcon}
      style={{ height: height || '75px' }}
      alt="loading..."
    />
  </LoadingWrapper>
)
