import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  margin: 0 auto;
  overflow: auto;
  @media (max-width: 767.98px) {
    width: 750px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 970px;
  }
  @media (min-width: 992px) {
    width: 1180px;
  }
  width: ${props => (props.fluid ? `100% !important` : null)};
`
