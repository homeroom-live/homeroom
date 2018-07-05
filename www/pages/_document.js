import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import { renderStatic } from 'glamor/server'
// import { Helmet } from 'react-helmet' // TODO

import 'bootstrap/dist/css/bootstrap.min.css'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const page = ctx.renderPage()
    const styles = renderStatic(() => page.html || page.errorHtml)

    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps, ...page, ...styles }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Homeroom.live – Livestreaming for Education</title>

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

          <script id="stripe-js" src="https://js.stripe.com/v3/" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>

        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
