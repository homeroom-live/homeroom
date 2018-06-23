import React from 'react'
import * as nookies from 'nookies'
import gql from 'graphql-tag'

import { redirect } from '../lib/redirect'
import { buildAuthorizeURL } from '../lib/auth0'

// Sections

import { Setup } from '../sections/signup/setup'

// Queries

const viewer = gql`
  query {
    viewer {
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

    const res = await ctx.apolloClient.query({
      query: viewer,
    })

    if (!res.data.viewer.requiresSetup) {
      return redirect(ctx, '/explore')
    }

    return {}
  }

  render() {
    return (
      <>
        <Setup />
      </>
    )
  }
}

export default Signup
