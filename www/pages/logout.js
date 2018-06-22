import React from 'react'
import nookies from 'nookies'

import { redirect } from '../lib/redirect'

class Logout extends React.Component {
  static async getInitialProps(ctx) {
    // Delete cookie and redirect
    nookies.destroyCookie(ctx, 'token')
    redirect(ctx, '/')

    return {}
  }
}

export default Logout
