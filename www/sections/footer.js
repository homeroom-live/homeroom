import React from 'react'
import Link from 'next/link'
import { Row, Col } from 'reactstrap'

import { FlexRow } from '../components/FlexRow'
import { FlexCol } from '../components/FlexCol'
import { Icon } from '../components/Icon'
import { Text } from '../components/Text'
import { Logo } from '../components/Logo'

import { spacing } from '../utils/spacing'
import { colors } from '../utils/colors'

import iconTwitter from '../static/assets/icons/ui/twitter.svg'
import iconFacebook from '../static/assets/icons/ui/facebook.svg'

const footerRowStyles = {
  padding: `${spacing.xlarge} ${spacing.medium}`,
  background: colors.secondary,
}

const footerContentRowStyles = {
  justifyContent: 'center',
  alignItems: 'flex-end',
  flexWrap: 'nowrap',
  '@media(max-width: 992px)': {
    flexWrap: 'wrap-reverse',
  },
}

const logoStyles = {
  height: '36px',
  marginBottom: '6px',
  marginRight: spacing.large,
  '@media(max-width: 992px)': {
    margin: `${spacing.regular} 0`,
  },
}

const iconRowStyles = {
  justifyContent: 'flex-start',
  '@media(max-width: 992px)': {
    justifyContent: 'center',
  },
}

const emailStyles = {
  flex: 0,
  margin: 0,
  '@media(max-width: 992px)': {
    textAlign: 'center',
  },
}

export const Footer = () => (
  <Row style={footerRowStyles}>
    <Col md={{ size: 6, offset: 3 }}>
      <FlexRow css={footerContentRowStyles}>
        <Logo css={logoStyles} />

        <FlexCol css={{ flex: 0 }}>
          <FlexRow css={iconRowStyles}>
            <Link href="https://twitter.com/homeroom_live">
              <Icon src={iconTwitter} />
            </Link>

            <Link href="https://www.facebook.com/Homeroom-216487308907825">
              <Icon src={iconFacebook} />
            </Link>
          </FlexRow>

          <Text size="medium" weight="bold" css={emailStyles}>
            team@homeroom.live
          </Text>
        </FlexCol>
      </FlexRow>
    </Col>
  </Row>
)
