import React from 'react'
import Link from 'next/link'
import { Row, Col } from 'reactstrap'

import { FlexRow } from '../../components/FlexRow'
import { FlexCol } from '../../components/FlexCol'
import { Button } from '../../components/Button'
import { Text } from '../../components/Text'

import { spacing } from '../../utils/spacing'
import { colors } from '../../utils/colors'

const inviteStyles = {
  padding: `${spacing.xlarge} ${spacing.medium}`,
  background: colors.grayLightest,
}

const ctaRowStyles = {
  marginTop: spacing.large,
  padding: `${spacing.xlarge} ${spacing.medium}`,
  background: colors.grayLightest,
  justifyContent: 'center',
}

export const Invite = ({ css }) => (
  <Row style={inviteStyles}>
    <Col md={{ size: 6, offset: 3 }}>
      <FlexCol css={{ textAlign: 'center' }}>
        <Text size="small" weight="bold" color="gray">
          What are you waiting for?
        </Text>
        <Text size="large" weight="bold">
          Start sharing your knowledge for profit in 5 minutes
        </Text>

        <FlexRow css={ctaRowStyles}>
          <Link href="/signup">
            <a>
              <Button theme="primary">Become a Teacher</Button>
            </a>
          </Link>
          <Link href="/explore">
            <a>
              <Button theme="secondary">Browse Classes</Button>
            </a>
          </Link>
        </FlexRow>
      </FlexCol>
    </Col>
  </Row>
)
