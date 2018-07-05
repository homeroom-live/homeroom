import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'
// import { Helmet } from 'react-helmet' // TODO

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )
    const styles = sheet.getStyleElement()
    return { ...page, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Homeroom – Livestreaming for Education</title>

          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#424B54" />
          <meta
            name="description"
            content="Join the first livestreaming platform built for education."
          />
          <meta
            name="keywords"
            content="livestream, video, live-stream, education, learn, teach, social video, live stream"
          />

          <link rel="manifest" href="/static/manifest.json" />
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="stylesheet" href="/static/index.css" />
          {this.props.styles}

          <script id="stripe-js" src="https://js.stripe.com/v3/" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
