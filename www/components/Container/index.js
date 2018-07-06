import styled from 'styled-components'

import { spacing } from 'utils/spacing'

export const Container = styled.div`
  display: flex;
  margin: ${spacing.regular} auto;
  @media (max-width: 767.98px) {
    width: 750px;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 970px;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    width: 1180px;
  }
`
