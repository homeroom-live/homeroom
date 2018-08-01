import React from 'react'
import gql from 'graphql-tag'

import { redirect } from 'lib/redirect'

// GraphQL

const viewerQuery = gql`
  query ViewerLogin {
    viewer {
      user {
        id
      }
      requiresSetup
      isLoggedIn
    }
  }
`

// Wrapper

export const withLogin = (ComposedComponent, options) =>
  class WithLogin extends React.Component {
    static async getInitialProps(ctx) {
      // Init

      let auth = {}
      let composedInitialProps = {}

      if (ComposedComponent.getInitialProps) {
        ;[auth, composedInitialProps] = await Promise.all([
          ctx.apolloClient.query({
            query: viewerQuery,
            fetchPolicy: 'no-cache',
            errorPolicy: 'ignore',
          }),
          ComposedComponent.getInitialProps(ctx),
        ])
      } else {
        auth = await ctx.apolloClient.query({
          query: viewerQuery,
          fetchPolicy: 'no-cache',
          errorPolicy: 'ignore',
        })
      }

      if (!auth.data.viewer.isLoggedIn) {
        return redirect(ctx, '/signup')
      } else if (auth.data.viewer.requiresSetup && options.setup) {
        return redirect(ctx, '/profile')
      } else {
        return {
          ...composedInitialProps,
        }
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
