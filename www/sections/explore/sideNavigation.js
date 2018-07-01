import React from 'react'
import Link from 'next/link'

// Components

import { Container, Row, Col } from 'reactstrap'
import { Icon } from '../../components/Icon'
import { FlexCol } from '../../components/FlexCol'
import { NavButton } from '../../components/NavButton'

// Icons

import iconFile from '../../static/assets/icons/ui/file.svg'
import iconGraphBar from '../../static/assets/icons/ui/graph-bar.svg'
import iconClock from '../../static/assets/icons/ui/clock.svg'
import iconVideo from '../../static/assets/icons/ui/video.svg'

// Styles

import { spacing } from '../../utils/spacing'

const iconStyles = {
  padding: 0,
  paddingRight: spacing.small,
}

const buttonStyles = {
  paddingTop: spacing.regular,
  paddingBottom: spacing.regular,
}

// Navigation

const NavigationItem = ({ label, icon, href, identifier, activeSection }) => (
  <Link key={identifier} href={href} prefetch passHref>
    <NavButton css={buttonStyles} active={activeSection === identifier}>
      <Icon src={icon} css={iconStyles} />
      {label}
    </NavButton>
  </Link>
)

export const SideNavigation = ({ children, activeSection }) => (
  <Container>
    <Row style={{ marginTop: spacing.medium }}>
      <Col
        sm={{ size: 12 }}
        md={{ size: 4 }}
        lg={{ size: 3 }}
        style={{ marginBottom: spacing.medium }}
      >
        <FlexCol>
          <NavigationItem
            label="For you"
            icon={iconFile}
            href="/explore"
            identifier="suggestions"
            activeSection={activeSection}
          />
          <NavigationItem
            label="Live Classes"
            icon={iconClock}
            href="/explore/live"
            identifier="live"
            activeSection={activeSection}
          />
          <NavigationItem
            label="Recorded videos"
            icon={iconVideo}
            href="/explore/recorded"
            identifier="recorded"
            activeSection={activeSection}
          />
          <NavigationItem
            label="Upcoming sessions"
            icon={iconGraphBar}
            href="/explore/upcoming"
            identifier="upcoming"
            activeSection={activeSection}
          />
        </FlexCol>
      </Col>
      <Col sm={{ size: 12 }} md={{ size: 8 }} lg={{ size: 9 }}>
        {children}
      </Col>
    </Row>
  </Container>
)
