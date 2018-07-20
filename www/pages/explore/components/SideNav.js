import React from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { Button } from 'components/Button'
import { Link } from 'components/Link'

import { colors, spacing } from 'utils/theme'
import iconVideo from 'static/assets/icons/ui/video.svg'
import iconHome from 'static/assets/icons/ui/home.svg'
import iconGraphBar from 'static/assets/icons/ui/graph-bar.svg'

const SideNavigationCol = styled(FlexCol)`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 250px !important;
  height: 100vh;
  padding: ${spacing.medium};
  background: ${colors.white};
  border-right: 1px solid ${colors.grayLightest};
  box-shadow: 15px 0 30px 0 rgba(66, 75, 84, 0.1);
  box-sizing: border-box;
`
const SideNavigationButton = styled(Button)`
  justify-content: flex-start;
`
const TeachLink = styled(Link)`
  margin-top: auto;
`
const TeachButton = styled(Button)`
  width: 100%;
`

const scrollToId = id =>
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
  })

export const SideNav = () => (
  <SideNavigationCol>
    <SideNavigationButton
      color="tertiary"
      src={iconVideo}
      onClick={() => scrollToId('#liveLessons')}
    >
      Live
    </SideNavigationButton>
    <SideNavigationButton
      color="tertiary"
      src={iconGraphBar}
      onClick={() => scrollToId('#popularLessons')}
    >
      Popular
    </SideNavigationButton>
    <SideNavigationButton
      color="tertiary"
      src={iconHome}
      onClick={() => scrollToId('#subscribedLessons')}
    >
      Subscribed
    </SideNavigationButton>
    <TeachLink href="/teach">
      <TeachButton color="primary">Start Teaching</TeachButton>
    </TeachLink>
  </SideNavigationCol>
)
