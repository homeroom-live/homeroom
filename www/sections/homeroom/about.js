import React from 'react'
import { Row, Col } from 'reactstrap'

// Components

import { FlexRow } from '../../components/FlexRow'
import { FlexCol } from '../../components/FlexCol'
import { Text } from '../../components/Text'
import { Icon } from '../../components/Icon'

// Assets

import iconVideo from '../../static/assets/icons/ui/video.svg'
import iconArchive from '../../static/assets/icons/ui/archive.svg'
import iconBarGraph from '../../static/assets/icons/ui/graph-bar.svg'
import iconHeart from '../../static/assets/icons/ui/heart.svg'

// Style

import { spacing } from '../../utils/spacing'
import { shadow } from '../../utils/colors'

const iconStyles = {
  padding: 0,
  marginTop: '4px',
  height: '24px',
  marginRight: spacing.regular,
}

const aboutRowStyles = {
  alignItems: 'flex-start',
  marginBottom: spacing.regular,
  padding: spacing.regular,
  ...shadow,
}

// About

export class About extends React.Component {
  render() {
    return (
      <Row style={{ margin: `${spacing.large} 0 ${spacing.xxlarge}` }}>
        <Col md={{ size: 12 }} style={{ paddingLeft: 0 }}>
          <Text
            weight="bold"
            color="gray"
            size="small"
            css={{ textTransform: 'uppercase', marginBottom: spacing.regular }}
          >
            How it works
          </Text>
        </Col>

        <Col md={{ size: 6 }} sm={{ size: 12 }} style={{ paddingLeft: 0 }}>
          <FlexRow css={aboutRowStyles}>
            <Icon src={iconVideo} css={iconStyles} />
            <FlexCol>
              <Text weight="bold" size="large">
                Teach in realtime
              </Text>

              <Text>
                Create an authentic and interactive experience for your audience
                from anywhere in the world.
              </Text>
            </FlexCol>
          </FlexRow>
        </Col>

        <Col md={{ size: 6 }} sm={{ size: 12 }} style={{ paddingLeft: 0 }}>
          <FlexRow css={aboutRowStyles}>
            <Icon src={iconArchive} css={iconStyles} />
            <FlexCol>
              <Text weight="bold" size="large">
                Record your classes
              </Text>

              <Text>
                Every class is automatically recorded so you can aggregate
                content and students can review your classes.
              </Text>
            </FlexCol>
          </FlexRow>
        </Col>

        <Col md={{ size: 6 }} sm={{ size: 12 }} style={{ paddingLeft: 0 }}>
          <FlexRow css={aboutRowStyles}>
            <Icon src={iconBarGraph} css={iconStyles} />
            <FlexCol>
              <Text weight="bold" size="large">
                Grow your following
              </Text>

              <Text>
                Build your brand by developing relationships with a passionate
                and energetic global audience.
              </Text>
            </FlexCol>
          </FlexRow>
        </Col>

        <Col md={{ size: 6 }} sm={{ size: 12 }} style={{ paddingLeft: 0 }}>
          <FlexRow css={aboutRowStyles}>
            <Icon src={iconHeart} css={iconStyles} />
            <FlexCol>
              <Text weight="bold" size="large">
                {`Get creative`}
              </Text>

              <Text>
                {`Whether you love baking cakes or building robots, there's an
                audience for your content!`}
              </Text>
            </FlexCol>
          </FlexRow>
        </Col>
      </Row>
    )
  }
}
