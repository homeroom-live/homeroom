import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'next/router'

import { FlexRow } from 'components/FlexRow'
import { Icon } from 'components/Icon'
import { Link } from 'components/Link'
import { TextStyle } from 'components/TextStyle'

import { colors, spacing, opacity } from 'utils/theme'
import iconInformation from 'static/assets/icons/ui/information.svg'
import iconUser from 'static/assets/icons/ui/user.svg'
import iconVideo from 'static/assets/icons/ui/video.svg'
import iconFile from 'static/assets/icons/ui/file.svg'

const TabRow = styled(FlexRow)`
  border-bottom: 1px solid ${colors.grayLightest};
`
const activeSideNavLinkStyles = () => `
  opacity: 1;
  color: ${colors.secondary};
  text-decoration: none;
  background: ${colors.grayLightest};
`
const NavLink = styled(Link)`
  display: flex;
  padding: ${spacing.regular} ${spacing.medium};
  color: ${colors.secondary};
  white-space: nowrap;
  text-decoration: none;
  opacity: ${opacity};
  &:hover {
    ${activeSideNavLinkStyles()};
  }
  ${({ active }) => (active ? activeSideNavLinkStyles() : null)};
`
const NavIcon = styled(Icon)`
  margin-right: ${spacing.small};
  margin-top: -2px;
`

export const LessonNavigation = withRouter(({ activeSection, router }) => (
  <TabRow>
    <NavLink
      href={`${router.asPath}/about`}
      active={activeSection === ''}
      size="small"
      weight="bold"
    >
      <NavIcon src={iconInformation} />
      About
    </NavLink>
    <NavLink
      href={`${router.asPath}/profile`}
      active={activeSection === 'profile'}
      size="small"
      weight="bold"
    >
      <NavIcon src={iconUser} />
      Profile
    </NavLink>
    <NavLink
      href={`${router.asPath}/lessons`}
      active={activeSection === 'lessons'}
      size="small"
      weight="bold"
    >
      <NavIcon src={iconVideo} />
      Lessons
      <TextStyle margin="0 0 0 3px" color="gray">
        19
      </TextStyle>
    </NavLink>
    <NavLink
      href={`${router.asPath}/lists`}
      active={activeSection === 'lists'}
      size="small"
      weight="bold"
    >
      <NavIcon src={iconFile} />
      Lists
      <TextStyle margin="0 0 0 3px" color="gray">
        4
      </TextStyle>
    </NavLink>
  </TabRow>
))
