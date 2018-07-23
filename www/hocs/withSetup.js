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

export const withSetup = ComposedComponent =>
  class WithSetup extends React.Component {
    static async getInitialProps(ctx) {
      const res = await ctx.apolloClient.query({
        query: viewerQuery,
        fetchPolicy: 'network-only',
        errorPolicy: 'ignore',
      })

      if (res.data.viewer.requiresSetup) {
        return redirect(ctx, '/profile')
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
