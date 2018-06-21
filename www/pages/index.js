import React from 'react'

// Sections
import { About } from '../sections/homeroom/about'

class Homeroom extends React.Component {
  static async getInitialProps() {
    return {}
  }

  render() {
    return (
      <>
        <About />
      </>
    )
  }
}

export default Homeroom
