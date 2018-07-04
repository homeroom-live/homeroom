import React, { Fragment } from 'react'

import { redirect } from 'lib/redirect'

// Sections

import { ClassroomInformation } from 'sections/classroom/classroomInformation'
import { Navigation } from 'sections/navigation'
import { Footer } from 'sections/footer'

// Classroom

class Classroom extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <ClassroomInformation />
        <Footer />
      </Fragment>
    )
  }
}

export default Classroom