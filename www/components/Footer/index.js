import React from 'react'
import styled from 'styled-components'

import { FlexRow } from 'components/FlexRow'
import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { Link } from 'components/Link'
import { Container } from 'components/Container'

import {
  spacing,
  colors,
  fontSizes,
  fontWeights,
  opacity,
  transition,
} from 'utils/theme'

import logoDark from 'static/assets/images/logos/logo-dark.svg'
import iconFacebook from 'static/assets/icons/ui/facebook.svg'
import iconInstagram from 'static/assets/icons/ui/instagram.svg'
import iconTwitter from 'static/assets/icons/ui/twitter.svg'

const FooterWrapper = styled.footer`
  display: flex;
  align-items: flex-start;
  padding: ${spacing.xlarge} ${spacing.medium};
  border-top: 1px solid ${colors.grayLighter};
`
const FooterLink = styled(Link)`
  margin: 0 0 ${spacing.xsmall};
  color: ${colors.grayDarker};
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  text-decoration: none;
  transition: ${transition};
  &:hover {
    text-decoration: none;
    color: ${colors.secondary};
  }
`
const FooterCol = styled(FlexCol)`
  margin-right: ${spacing.xlarge};
  align-items: flex-start;
  flex-basis: 0;
  white-space: nowrap;
  &:last-child {
    margin-right: 0;
  }
`
const LogoCol = styled(FooterCol)`
  margin-right: 180px;
`
const Logo = styled.img`
  height: 24px;
  margin-right: 20%;
`
const SocialCol = styled(FooterCol)`
  margin-left: auto;
`
const SocialIcon = styled(Icon)`
  margin-bottom: ${spacing.xsmall};
  opacity: ${opacity};
  &:hover {
    opacity: 1;
  }
`

export const Footer = () => (
  <FooterWrapper>
    <Container direction="row">
      <LogoCol>
        <Link href="/">
          <Logo src={logoDark} />
        </Link>
      </LogoCol>

      <FooterCol>
        <Text color="grayDarker" weight="bold">
          TEACH & LEARN
        </Text>
        <FooterLink href="/">Explore Lessons</FooterLink>
        <FooterLink href="/teach">Become a Teacher</FooterLink>
        <FooterLink href="/profile">Manage Profile</FooterLink>
        <FooterLink href="/profile/lessons">Manage Lessons</FooterLink>
      </FooterCol>

      <FooterCol>
        <Text color="grayDarker" weight="bold">
          SUPPORT
        </Text>
        <FooterLink href="mailto:team@homeroom.live">Email Us</FooterLink>
        <FooterLink href="/explore">FAQs</FooterLink>
      </FooterCol>

      <FooterCol>
        <Text color="grayDarker" weight="bold">
          COMPANY
        </Text>
        <FooterLink href="/explore">About</FooterLink>
        <FooterLink href="/explore">Blog</FooterLink>
      </FooterCol>

      <SocialCol>
        <Link href="">
          <SocialIcon src={iconFacebook} />
        </Link>
        <Link href="">
          <SocialIcon src={iconInstagram} />
        </Link>
        <Link href="">
          <SocialIcon src={iconTwitter} />
        </Link>
      </SocialCol>
    </Container>
  </FooterWrapper>
)
