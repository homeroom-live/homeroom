import React from 'react'

import { Body } from 'pages/teach/components/Body'
import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'

class TeachPage extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Body />
        <Footer />
      </>
    )
  }
}

export default TeachPage
