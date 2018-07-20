import React from 'react'

import { Welcome } from 'pages/explore/components/Welcome'
import { Body } from 'pages/explore/components/Body'
import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'

import { explore } from 'data/explore'
import { viewer } from 'data/viewer'

class Explore extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navbar activePage="" />
        {viewer.requiresSetup && <Welcome />}
        <Body data={{ explore }} />
        <Footer />
      </>
    )
  }
}

export default Explore
