import React from 'react'
import gql from 'graphql-tag'

import { redirect } from 'lib/redirect'

// GraphQL

const viewerQuery = gql`
  query Viewer {
    viewer {
      user {
        id
      }
      requiresSetup
    }
  }
`

// Wrapper

export const withLogin = ComposedComponent =>
  class WithLogin extends React.Component {
    static async getInitialProps(ctx) {
      const res = await ctx.apolloClient.query({
        query: viewerQuery,
        errorPolicy: 'ignore',
      })

      console.log('login', { res })

      if (!res.data.viewer) {
        return redirect(ctx, '/signup')
      }

      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

      return {
        ...composedInitialProps,
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }