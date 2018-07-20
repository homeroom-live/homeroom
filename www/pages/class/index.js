import React, { Fragment } from 'react'

// Sections

import { ClassSection } from 'sections/class'
import { Navigation } from 'sections/navigation'
import { Footer } from 'sections/footer'

// Class

class Class extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <Fragment>
        <Navigation activePage="class" />
        <ClassSection />
        <Footer />
      </Fragment>
    )
  }
}

export default Class
