import React from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { Text } from 'components/Text'
import { Button } from 'components/Button'
import { Link } from 'components/Link'
import { Icon } from 'components/Icon'

import { spacing } from 'utils/theme'
import illustrationWelcome from 'static/assets/images/illustrations/teach-welcome.svg'
import illustrationEducate from 'static/assets/images/illustrations/teach-educate.svg'
import illustrationEngage from 'static/assets/images/illustrations/teach-engage.svg'
import illustrationEarn from 'static/assets/images/illustrations/teach-earn.svg'
import iconCheck from 'static/assets/icons/ui/check.svg'

const TeachContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: ${spacing.large};
  box-sizing: border-box;
`
const TeachRow = styled(FlexRow)`
  padding-bottom: ${spacing.xxlarge};
  padding-left: ${spacing.large};
  padding-right: ${spacing.large};
`
const TeachCol = styled(FlexCol)`
  padding: ${spacing.regular} 0;
`
const WelcomeIllustration = styled.img`
  height: 450px;
  padding-left: ${spacing.medium};
`
const TeachIllustration = styled.img``
const EducateIllustration = styled.img`
  padding-right: ${spacing.regular};
`
const TeachLink = styled(Link)`
  margin-top: ${spacing.regular};
  margin-right: ${spacing.xsmall};
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`
const TeachBulletCol = styled(FlexCol)`
  margin-top: ${spacing.medium};
`
const BulletRow = styled(FlexRow)`
  margin-bottom: ${spacing.regular};
`
const BulletIcon = styled(Icon)`
  margin-top: -6px;
  margin-right: ${spacing.small};
`
const TeachBulletItem = ({ src, value }) => (
  <BulletRow>
    <BulletIcon src={src} />
    <Text size="small" weight="bold">
      {value}
    </Text>
  </BulletRow>
)
const FooterRow = styled(TeachRow)`
  flex-direction: column;
  margin-top: ${spacing.xlarge};
  text-align: center;
`
const FooterButton = styled(Button)`
  width: 200px;
  margin-top: ${spacing.regular};
`

export const Body = () => (
  <TeachContainer>
    <TeachRow>
      <TeachCol>
        <Header size="xlarge">Share your passion</Header>
        <Text size="medium">
          Educate, grow, and monetize your audience with educational
          livestreams.
        </Text>
        <TeachLink href="/signup">
          <Button color="primary">Get Started</Button>
        </TeachLink>
      </TeachCol>
      <TeachCol>
        <WelcomeIllustration src={illustrationWelcome} />
      </TeachCol>
    </TeachRow>

    <TeachRow>
      <TeachCol>
        <EducateIllustration src={illustrationEducate} />
      </TeachCol>
      <TeachCol>
        <Header size="xlarge">Educate</Header>
        <Text size="medium">
          Get creative educating and entertaining your audience with structured
          courses and casual lessons.
        </Text>
        <TeachBulletCol>
          <TeachBulletItem
            src={iconCheck}
            value="Teach with education-specific livestreaming tools"
          />
          <TeachBulletItem
            src={iconCheck}
            value="Record and annotate your streams with Q&A and sections"
          />
          <TeachBulletItem
            src={iconCheck}
            value="Build a library of educational streams and videos"
          />
        </TeachBulletCol>
      </TeachCol>
    </TeachRow>

    <TeachRow>
      <TeachCol>
        <Header size="xlarge">Engage</Header>
        <Text size="medium">
          Interact with your audience and give your community a home.
        </Text>
        <TeachBulletCol>
          <TeachBulletItem
            src={iconCheck}
            value="Create a personal connection with your followers"
          />
          <TeachBulletItem
            src={iconCheck}
            value="Chat, share, and explore ideas"
          />
          <TeachBulletItem
            src={iconCheck}
            value="Provide a place for students to collaborate around the clock"
          />
        </TeachBulletCol>
      </TeachCol>
      <TeachCol>
        <TeachIllustration src={illustrationEngage} />
      </TeachCol>
    </TeachRow>

    <TeachRow>
      <TeachCol>
        <TeachIllustration src={illustrationEarn} />
      </TeachCol>
      <TeachCol>
        <Header size="xlarge">Earn</Header>
        <Text size="medium">
          Monetize your educational content and earn the support of your
          audience. <u>Homeroom takes 10% of sales and subscriptions</u>, 3% of
          which goes to transaction fees.
        </Text>
        <TeachBulletCol>
          <TeachBulletItem
            src={iconCheck}
            value="Sell and share your educational streams and videos"
          />
          <TeachBulletItem
            src={iconCheck}
            value="Expose premium content and access through monthly subscriptions"
          />
          <TeachBulletItem
            src={iconCheck}
            value="Collect 100% of your fans’ donations"
          />
        </TeachBulletCol>
      </TeachCol>
    </TeachRow>

    <FooterRow>
      <Header size="xxxlarge">Ready to get started?</Header>
      <Text size="medium">It only takes 5 minutes to start streaming!</Text>
      <Link href="/dashboard">
        <FooterButton color="primary">Get Started</FooterButton>
      </Link>
    </FooterRow>
  </TeachContainer>
)
