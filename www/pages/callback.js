import React from 'react'
import * as nookies from 'nookies'

import { redirect } from 'lib/redirect'
import { parseHash } from 'lib/auth0'

class Callback extends React.Component {
  static async getInitialProps(ctx) {
    // Removes all existing Query results from cache
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

    redirect({}, '/profile')
  }

  render() {
    return null
  }
}

export default Callback
