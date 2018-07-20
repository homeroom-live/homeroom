import React from 'react'

// Sections

import { Navigation } from 'sections/navigation'
import { TeachSection } from 'sections/teach'
import { Footer } from 'sections/footer'

// Explore

class Teach extends React.Component {
  render() {
    return (
      <>
        <Navigation transparent />
        <TeachSection />
        <Footer />
      </>
    )
  }
}

export default Teach
