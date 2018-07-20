import React from 'react'

import { Body } from 'pages/teach/components/Body'
import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'

class Teach extends React.Component {
  render() {
    return (
      <>
        <Navbar transparent />
        <Body />
        <Footer />
      </>
    )
  }
}

export default Teach
