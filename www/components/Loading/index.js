import styled from 'styled-components'

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

// export const Loading = ({ height, css }) => (
//   <LoadingWrapper css={css}>
//     <img
//       src={loadingIcon}
//       style={{ height: height || '75px' }}
//       alt="loading..."
//     />
//   </LoadingWrapper>
// )
