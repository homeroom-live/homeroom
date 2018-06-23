import React from 'react'
import * as nookies from 'nookies'

import { redirect } from '../lib/redirect'
import { buildAuthorizeURL } from '../lib/auth0'

class Signup extends React.Component {
  static async getInitialProps(ctx) {
    const token = nookies.parseCookies(ctx).token

    if (!token) {
      redirect(ctx, buildAuthorizeURL({}))
    } else {
      return {}
    }
  }

  render() {
    return <>Signup</>
  }
}

export default Signup
