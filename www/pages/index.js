import React from 'react'

// Components

import { Container } from 'reactstrap'

// Sections

import { Navigation } from 'sections/navigation'
import { Hero } from 'sections/homeroom/hero'
import { About } from 'sections/homeroom/about'
import { Testimonials } from 'sections/homeroom/testimonials'
import { Invite } from 'sections/homeroom/invite'
import { Footer } from 'sections/footer'

// Homeroom

class Homeroom extends React.Component {
  static async getInitialProps() {
    return {}
  }

  render() {
    return (
      <>
        <Navigation transparent />
        <Container>
          <Hero />
          <About />
          <Testimonials />
        </Container>
        <Container fluid>
          <Invite />
        </Container>
        <Footer />
      </>
    )
  }
}

export default Homeroom
