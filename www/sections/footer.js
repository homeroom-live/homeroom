import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
// import { Row, Col } from 'reactstrap'

import { FlexRow } from 'components/FlexRow'
import { FlexCol } from 'components/FlexCol'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'

import { spacing } from '../utils/spacing'
import { colors } from 'utils/colors'

import logoLight from 'static/assets/images/logos/logo-light.svg'
import iconTwitter from 'static/assets/icons/ui/twitter.svg'
import iconFacebook from 'static/assets/icons/ui/facebook.svg'

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

// const Logo = styled`
//   height: 36px;
//   margin-bottom: ${spacing.xsmall};
//   margin-right: ${spacing.large};
//   @media(max-width: 992px) {
//     margin: ${spacing.regular} 0;
//   }
// `

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

export const Footer = () => <div />
// <Row style={footerRowStyles}>
//   <Col md={{ size: 6, offset: 3 }}>
//     <FlexRow css={footerContentRowStyles}>
//       <Logo src={logoLight} />

//       <FlexCol css={{ flex: 0 }}>
//         <FlexRow css={iconRowStyles}>
//           <Link href="https://twitter.com/homeroom_live">
//             <Icon src={iconTwitter} />
//           </Link>

//           <Link href="https://www.facebook.com/Homeroom-216487308907825">
//             <Icon src={iconFacebook} />
//           </Link>
//         </FlexRow>

//         <Text size="medium" weight="bold" css={emailStyles}>
//           team@homeroom.live
//         </Text>
//       </FlexCol>
//     </FlexRow>
//   </Col>
// </Row>
