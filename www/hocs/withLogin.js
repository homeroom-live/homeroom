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
      status
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

      switch (auth.data.viewer.status) {
        case 'READY': {
          return {
            ...composedInitialProps,
          }
        }

        case 'REQUIRES_SETUP': {
          if (options && options.setup) {
            return redirect(ctx, '/auth/setup')
          } else {
            return {
              ...composedInitialProps,
            }
          }
        }

        case 'NO_VIEWER':
        default: {
          return redirect(ctx, '/auth/signup')
        }
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
