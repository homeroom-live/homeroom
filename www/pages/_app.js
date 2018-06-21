import React from 'react'
import App, { Container } from 'next/app'
import getConfig from 'next/config'

import { ApolloProvider } from 'react-apollo'
import { StripeProvider } from 'react-stripe-elements'

import { withApollo } from '../hocs/withApollo'

// Config

const { publicRuntimeConfig } = getConfig()

// Layout

class Layout extends App {
  state = {
    stripe: null,
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    this.setState({
      stripe: window.Stripe(publicRuntimeConfig.stripeId),
    })
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <StripeProvider stripe={this.state.stripe}>
            <Component {...pageProps} />
          </StripeProvider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(Layout)
