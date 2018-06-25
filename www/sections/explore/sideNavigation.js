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

// Types

const types = [
  {
    name: 'For you',
    icon: iconFile,
    href: '/explore',
    identifier: 'suggestions',
  },
  {
    name: 'Live',
    icon: iconClock,
    href: '/explore/live',
    identifier: 'live',
  },
  {
    name: 'Recorded',
    icon: iconVideo,
    href: '/explore/recorded',
    identifier: 'recorded',
  },
  {
    name: 'Upcoming',
    icon: iconGraphBar,
    href: '/explore/upcoming',
    identifier: 'upcoming',
  },
]

const isActive = (type, active) => type.identifier === active

// Navigation

export const SideNavigation = ({ children, active }) => (
  <Container>
    <Row style={{ marginTop: spacing.medium }}>
      <Col
        sm={{ size: 12 }}
        md={{ size: 4 }}
        lg={{ size: 3 }}
        style={{ marginBottom: spacing.medium }}
      >
        <FlexCol>
          {types.map(type => (
            <Link key={type.identifier} href={type.href} prefetch passHref>
              <NavButton
                css={buttonStyles}
                className={isActive(type, active) ? 'active' : ''}
              >
                <Icon src={type.icon} css={iconStyles} />
                {type.name}
              </NavButton>
            </Link>
          ))}
        </FlexCol>
      </Col>
      <Col sm={{ size: 12 }} md={{ size: 8 }} lg={{ size: 9 }}>
        {children}
      </Col>
    </Row>
  </Container>
)
