import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import getConfig from 'next/config'
import nprogress from 'nprogress'

import { ApolloProvider } from 'react-apollo'
import { StripeProvider } from 'react-stripe-elements'

// HOCs

import { withApollo } from 'hocs/withApollo'

// Styles

import 'static/nprogress.css'

// Config

const { publicRuntimeConfig } = getConfig()

// NProgress

let progress

const stopProgress = () => {
  clearTimeout(progress)
  nprogress.done()
}

const startProgress = () => {
  progress = setTimeout(nprogress.start, 200)
}

Router.onRouteChangeStart = startProgress
Router.onHashChangeStart = startProgress
Router.onRouteChangeComplete = stopProgress
Router.onRouteChangeError = stopProgress
Router.onHashChangeComplete = stopProgress

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
