import React, { Fragment } from 'react'

// Sections

import { ClassInformation } from 'sections/class/classInformation'
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
        <ClassInformation />
        <Footer />
      </Fragment>
    )
  }
}

export default Class
