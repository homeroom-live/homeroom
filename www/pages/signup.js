import React from 'react'
import * as nookies from 'nookies'

import { redirect } from 'lib/redirect'
import { buildAuthorizeURL } from 'lib/auth0'

// Signup

class Signup extends React.Component {
  static async getInitialProps(ctx) {
    const token = nookies.parseCookies(ctx).token

    if (token) {
      return redirect(ctx, '/explore')
    } else {
      return redirect(ctx, buildAuthorizeURL({ nonce: 'homeroom' }))
    }
  }

  render() {
    return null
  }
}

export default Signup
