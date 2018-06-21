import React from 'react'
import { Row, Col } from 'reactstrap'

import { Text } from '../../components/Text'
// import CTAButtons from './CTAButtons'

import { spacing } from '../../utils/spacing'

import landingHeroImage from '../../static/assets/images/landing-hero.jpg'

const heroImageStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '80vh',
  objectFit: 'cover',
}

export const Hero = () => (
  <Row style={{ height: '80vh' }}>
    <img src={landingHeroImage} style={heroImageStyles} alt="" />
    <Col md={{ size: 6 }} style={{ marginTop: spacing.xxlarge }}>
      <Text size="xlarge" weight="bold" color="white">
        Teach and sell livestreamed classes
      </Text>

      <Text size="medium" weight="medium" color="grayLight">
        Share your unique skills and passion with an engaged community of
        lifelong learners. Teach in realtime, grow your audience, and get
        rewarded for it.
      </Text>

      {/* <CTAButtons /> */}
    </Col>
  </Row>
)
