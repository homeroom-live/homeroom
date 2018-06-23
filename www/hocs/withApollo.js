import React from 'react'
import * as nookies from 'nookies'
import { getDataFromTree } from 'react-apollo'
import Head from 'next/head'

import { initApollo } from '../lib/apollo'

export const withApollo = App =>
  class WithData extends React.Component {
    static async getInitialProps(ctx) {
      const {
        Component,
        router,
        ctx: { res },
      } = ctx
      const apollo = initApollo(
        {},
        {
          getToken: () => nookies.get(ctx).token,
        },
      )

      ctx.ctx.apolloClient = apollo

      let composedInitialProps = {}
      if (App.getInitialProps) {
        composedInitialProps = await App.getInitialProps(ctx)
      }

      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {}
      }

      try {
        await getDataFromTree(
          <App
            {...composedInitialProps}
            Component={Component}
            router={router}
            apolloClient={apollo}
          />,
        )
      } catch (err) {
        console.error(`Error occured during Apollo request`, err)
      }

      if (!process.browser) {
        Head.rewind()
      }

      const apolloState = apollo.cache.extract()

      return {
        ...composedInitialProps,
        apolloState,
      }
    }

    constructor(props) {
      super(props)

      this.apolloClient = initApollo(props.apolloState, {
        getToken: () => nookies.parseCookies().token,
      })
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />
    }
  }
