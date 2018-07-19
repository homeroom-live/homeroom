import React from 'react'

// Sections

import { Navigation } from 'sections/navigation'
import { Content } from 'sections/teach/content'
import { Footer } from 'sections/footer'

// Explore

class Teach extends React.Component {
  render() {
    return (
      <>
        <Navigation transparent />
        <Content />
        <Footer />
      </>
    )
  }
}

export default Teach
