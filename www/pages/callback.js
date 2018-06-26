import React from 'react'
import * as nookies from 'nookies'

import { redirect } from '../lib/redirect'
import { parseHash } from '../lib/auth0'

class Callback extends React.Component {
  static async getInitialProps(ctx) {
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

    redirect({}, '/explore')
  }

  render() {
    return <></>
  }
}

export default Callback
