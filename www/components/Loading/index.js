import React from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { Text } from 'components/Text'

import { spacing } from 'utils/theme'

import loadingIllustration from 'static/assets/images/illustrations/loading.svg'
import loadingIcon from 'static/assets/icons/loading.svg'

export const Loading = styled.img.attrs({
  src: loadingIcon,
  alt: 'Loading...',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.height || `100%`};
  width: 100%;
`

const ContainerCol = styled(FlexCol)`
  justify-content: center;
  align-items: center;
  padding: ${spacing.large};
`
const Illustration = styled.img.attrs({
  src: loadingIllustration,
  alt: 'Loading Homeroom',
})`
  max-width: 512px;
  margin-top: ${spacing.xlarge};
  margin-bottom: ${spacing.regular};
  object-fit: contain;
`
export const LoadingIllustration = () => (
  <ContainerCol>
    <Illustration />
    <Text>Insert Quote here</Text>
  </ContainerCol>
)
