import React from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { Text } from 'components/Text'
import { Button } from 'components/Button'
import { Link } from 'components/Link'

import { spacing, colors } from 'utils/theme'
import illustrationWelcome from 'static/assets/images/illustrations/explore-welcome.svg'

const WelcomeRow = styled(FlexRow)`
  padding: ${spacing.large};
  border-bottom: 1px solid ${colors.grayLighter};
`
const WelcomeContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const WelcomeCol = styled(FlexCol)`
  padding: ${spacing.regular};
`
const WelcomeIllustration = styled.img`
  height: 425px;
`
const WelcomeLink = styled(Link)`
  margin-top: ${spacing.regular};
  margin-right: ${spacing.xsmall};
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`

export const WelcomeHero = () => (
  <WelcomeRow>
    <WelcomeContainer>
      <WelcomeCol>
        <Header size="xlarge">Learn anything in realtime</Header>
        <Text size="medium">
          Get feedback, meet people with similar interests, and grow while
          participating in educational livestreams.
        </Text>
        <FlexRow>
          <WelcomeLink href="/signup">
            <Button color="primary">Get Started</Button>
          </WelcomeLink>
          <WelcomeLink href="/teach">
            <Button color="secondary">Start Teaching</Button>
          </WelcomeLink>
        </FlexRow>
      </WelcomeCol>
      <WelcomeCol>
        <WelcomeIllustration src={illustrationWelcome} />
      </WelcomeCol>
    </WelcomeContainer>
  </WelcomeRow>
)
