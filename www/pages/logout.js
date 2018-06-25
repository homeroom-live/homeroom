import React from 'react'
import * as nookies from 'nookies'

import { redirect } from '../lib/redirect'

class Logout extends React.Component {
  static async getInitialProps(ctx) {
    await ctx.apolloClient.cache.reset()

    // Delete cookie and redirect
    nookies.destroyCookie(ctx, 'token')
    redirect(ctx, '/')
  }
}

export default Logout
