import React from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'

import { spacing } from 'utils/theme'

import loadingIllustration from 'static/assets/images/illustrations/loading.svg'
import loadingPrimary from 'static/assets/icons/loading-primary.svg'
import loadingSecondary from 'static/assets/icons/loading-secondary.svg'
import loadingWhite from 'static/assets/icons/loading-white.svg'

const loadingIcons = {
  primary: loadingWhite,
  secondary: loadingPrimary,
  tertiary: loadingSecondary,
  white: loadingWhite,
}

export const Loading = styled.img.attrs({
  src: props => loadingIcons[props.color || 'secondary'],
  alt: 'Loading...',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.height || `100%`};
`

const ContainerCol = styled(FlexCol)`
  align-items: center;
  padding: ${spacing.large};
`
const Illustration = styled.img.attrs({
  src: loadingIllustration,
  alt: 'Loading Homeroom',
})`
  max-width: 512px;
  width: 100%;
  margin-top: ${spacing.xlarge};
  margin-bottom: ${spacing.regular};
  object-fit: contain;
`
export const LoadingIllustration = ({ children, className }) => (
  <ContainerCol>
    <Illustration className={className} />
    {children}
  </ContainerCol>
)
