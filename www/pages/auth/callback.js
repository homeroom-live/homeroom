import React from 'react'
import * as nookies from 'nookies'
import { redirect } from 'lib/redirect'
import { parseHash } from 'lib/auth0'
import styled from 'styled-components'

import { Navbar } from 'components/Navbar'
import { FlexCol } from 'components/FlexCol'
import { Header } from 'components/Header'

import { spacing } from 'utils/theme'

import illustrationAuth from 'static/assets/images/illustrations/callback-auth.svg'

const ContainerCol = styled(FlexCol)`
  justify-content: center;
  align-items: center;
  padding: ${spacing.large};
`
const CallbackIllustration = styled.img`
  width: 512px;
  margin-top: ${spacing.xlarge};
  margin-bottom: ${spacing.regular};
  object-fit: contain;
`

class Callback extends React.Component {
  static async getInitialProps(ctx) {
    // Removes all existing Query results from cache
    await ctx.apolloClient.cache.reset()
    await ctx.apolloClient.resetStore()

    return {}
  }

  async componentDidMount() {
    const token = parseHash({
      hash: window.location.hash,
    })

    if (token) {
      nookies.setCookie({}, 'token', token, {
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      })
    }

    redirect({}, '/')
  }

  render() {
    return (
      <>
        <Navbar transparent />
        <ContainerCol>
          <CallbackIllustration src={illustrationAuth} />
          <Header>Entering Homeroom...</Header>
          <Header size="regular" color="gray">
            Beam me up, Scotty!
          </Header>
        </ContainerCol>
      </>
    )
  }
}

export default Callback
