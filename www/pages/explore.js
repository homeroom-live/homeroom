import React from 'react'

// Sections

import { Navigation } from '../sections/navigation'
import { Classes } from '../sections/explore/classes'
import { Footer } from '../sections/footer'

// Explore

class Explore extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navigation />
        <Classes />
        <Footer />
      </>
    )
  }
}

export default Explore
