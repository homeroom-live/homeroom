import React from 'react'

// Sections

import { Navigation } from '../sections/navigation'

// Explore

class Explore extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navigation />
      </>
    )
  }
}

export default Explore
