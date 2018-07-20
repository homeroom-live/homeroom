import React from 'react'

import { Welcome } from 'pages/explore/components/Welcome'
import { Body } from 'pages/explore/components/Body'
import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'

import { explore } from 'data/explore'

class Explore extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navbar activePage="explore" />
        <Welcome />
        <Body data={explore} />
        <Footer />
      </>
    )
  }
}

export default Explore
