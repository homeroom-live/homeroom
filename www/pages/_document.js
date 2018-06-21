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
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#424B54" />

          <link rel="manifest" href="/static/manifest.json" />
          <meta
            name="description"
            content="Join the first livestreaming platform built for education."
          />
          <meta
            name="keywords"
            content="livestream, video, live-stream, education, learn, teach, social video, live stream"
          />

          <link rel="icon" type="image/png" href="/static/favicon.png" />

          <title>Homeroom.live – Livestreaming for Education</title>

          <script
            src="https://cdn.ravenjs.com/3.22.3/raven.min.js"
            crossOrigin="anonymous"
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-114308012-1"
          />
          {/* <script>
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'UA-114308012-1');
          </script> */}

          {/* <script type="text/javascript">(function(o){var b="https://api.autopilothq.com/anywhere/",t="e83b7e72b7164c7b99f5fd243ccb6b33fb99eca00e4046898f6c978de67a1185",a=window.AutopilotAnywhere={_runQueue:[],run:function(){this._runQueue.push(arguments);}},c=encodeURIComponent,s="SCRIPT",d=document,l=d.getElementsByTagName(s)[0],p="t="+c(d.title||"")+"&u="+c(d.location.href||"")+"&r="+c(d.referrer||""),j="text/javascript",z,y;if(!window.Autopilot) window.Autopilot=a;if(o.app) p="devmode=true&"+p;z=function(src,asy){var e=d.createElement(s);e.src=src;e.type=j;e.async=asy;l.parentNode.insertBefore(e,l);};y=function(){z(b+t+'?'+p,true);};if(window.attachEvent){window.attachEvent("onload",y);}else{window.addEventListener("load",y,false);}})({"app":true});</script> */}

          <meta
            name="google-site-verification"
            content="ZQl-Elg-3aCuBTLPWZkdTMplUU8j9M1_Sx_iSQTt340"
          />
          <meta property="fb:app_id" content="1941090022811723" />

          <link rel="stylesheet" href="/_next/static/style.css" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
          {/* <script src="https://js.stripe.com/v3/" /> */}
        </body>
      </html>
    )
  }
}
