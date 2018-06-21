import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import FlexRow from 'components/FlexRow'
import FlexCol from 'components/FlexCol'
import Text from 'components/Text'
import Logo from 'components/Logo'
import Icon from 'components/Icon'
import { LinkExternal } from 'components/Link'
import CTAButtons from './CTAButtons'

import spacing from 'styles/spacing'
import colors from 'styles/colors'
import iconTwitter from 'assets/icons/ui/twitter.svg'
import iconFacebook from 'assets/icons/ui/facebook.svg'

const ctaRowStyles = {
  padding: `${spacing.xlarge} ${spacing.medium}`,
  background: colors.grayLightest,
}

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

class FooterRow extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row style={ctaRowStyles}>
          <Col md={{ size: 6, offset: 3 }}>
            <FlexCol css={{ textAlign: 'center' }}>
              <Text size="small" weight="bold" color="gray">
                What are you waiting for?
              </Text>
              <Text size="large" weight="bold">
                Start sharing your knowledge for profit in 5 minutes
              </Text>

              <CTAButtons
                css={{ justifyContent: 'center', marginTop: spacing.large }}
              />
            </FlexCol>
          </Col>
        </Row>

        <Row style={footerRowStyles}>
          <Col md={{ size: 6, offset: 3 }}>
            <FlexRow css={footerContentRowStyles}>
              <Logo css={logoStyles} />

              <FlexCol css={{ flex: 0 }}>
                <FlexRow css={iconRowStyles}>
                  <LinkExternal
                    href="https://twitter.com/homeroom_live"
                    css={{ display: 'block', width: '40px' }}
                    target="_blank"
                  >
                    <Icon src={iconTwitter} />
                  </LinkExternal>

                  <LinkExternal
                    href="https://www.facebook.com/Homeroom-216487308907825"
                    css={{ display: 'block' }}
                    target="_blank"
                  >
                    <Icon src={iconFacebook} />
                  </LinkExternal>
                </FlexRow>

                <Text size="medium" weight="bold" css={emailStyles}>
                  team@homeroom.live
                </Text>
              </FlexCol>
            </FlexRow>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default FooterRow
