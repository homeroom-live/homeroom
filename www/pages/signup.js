import React from 'react'
import * as nookies from 'nookies'
import gql from 'graphql-tag'

import { redirect } from '../lib/redirect'
import { buildAuthorizeURL } from '../lib/auth0'

// Sections

import { Navigation } from '../sections/navigation'
import { Setup } from '../sections/signup/setup'
import { Footer } from '../sections/footer'

// Queries

const viewer = gql`
  query {
    viewer {
      user {
        id
      }
      requiresSetup
    }
  }
`

// Signup

class Signup extends React.Component {
  static async getInitialProps(ctx) {
    const token = nookies.parseCookies(ctx).token

    if (!token) {
      return redirect(ctx, buildAuthorizeURL({ nonce: 'homeroom' }))
    }

    // await ctx.apolloClient.cache.reset()
    await ctx.apolloClient.resetStore()

    const res = await ctx.apolloClient.query({
      query: viewer,
    })

    if (!res.data.viewer.requiresSetup) {
      return redirect(ctx, '/explore')
    } else {
      return {}
    }
  }

  render() {
    return (
      <>
        <Navigation />
        <Setup />
        <Footer />
      </>
    )
  }
}

export default Signup
