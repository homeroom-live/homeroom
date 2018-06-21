import React from 'react'
import { Row, Col } from 'reactstrap'

import { FlexRow } from '../../components/FlexRow'
import { FlexCol } from '../../components/FlexCol'
import { Text } from '../../components/Text'
import { Image } from '../../components/Image'

import { spacing } from '../../utils/spacing'
import { shadow } from '../../utils/colors'

import testimonialJohn from '../../static/assets/images/testimonial-john.jpg'
// import testimonialJacob from 'assets/images/testimonial-jacob.jpg'

const aboutRowStyles = {
  alignItems: 'flex-start',
  marginBottom: spacing.regular,
  padding: spacing.regular,
  '@media(max-width: 992px)': {
    flexDirection: 'column',
  },
  ...shadow,
}

const imageStyles = {
  marginRight: spacing.regular,
  '@media(max-width: 992px)': {
    marginBottom: spacing.regular,
  },
}

export const Testimonials = () => (
  <Row style={{ margin: `${spacing.xxlarge} 0 ${spacing.xxxlarge}` }}>
    <Text
      weight="bold"
      color="gray"
      size="small"
      css={{ textTransform: 'uppercase', marginBottom: spacing.regular }}
    >
      Our Teachers
    </Text>

    <Col md={{ size: 12 }} style={{ paddingLeft: 0 }}>
      <FlexRow css={aboutRowStyles}>
        <Image src={testimonialJohn} css={imageStyles} />
        <FlexCol>
          <Text weight="bold" color="gray" margin="0">
            John Chen
          </Text>
          <Text
            weight="bold"
            color="gray"
            size="small"
            css={{ marginBottom: spacing.xsmall }}
          >
            Founder & CEO, Blush and Bar
          </Text>

          <Text weight="bold" size="large" css={{ maxWidth: '600px' }}>
            “Homeroom was instrumental in helping me go from a one man shop to a
            7 figure business.”
          </Text>
        </FlexCol>
      </FlexRow>
    </Col>

    {/* <Col md={{ size: 12 }} style={{ paddingLeft: 0 }}>
          <FlexRow css={aboutRowStyles}>
            <Image
          src={testimonialJacob}
          css={{ marginRight: spacing.regular }}
            />
            <FlexCol>
          <Text weight="bold" color="gray" margin="0">
          Jacob Feldman
          </Text>
          <Text weight="bold" color="gray" size="small" css={{ marginBottom: spacing.xsmall }}>
          Founder & President, Nexus Academics
          </Text>

          <Text weight="bold" size="large" css={{ maxWidth: '600px '}} >
          "Homeroom allowed us to share our in-person classes with a
          global audience, ultimately bringing us hundreds of new students."
          </Text>
            </FlexCol>
          </FlexRow>
        </Col> */}
  </Row>
)
