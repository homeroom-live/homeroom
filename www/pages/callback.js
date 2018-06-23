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
    nookies.setCookie({}, 'token', token)
    redirect({}, '/signup')
  }

  render() {
    return <></>
  }
}

export default Callback
