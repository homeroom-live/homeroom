import React, { Fragment } from 'react'

// Sections

import { Navigation } from 'sections/navigation'
import { SideNavigation } from 'sections/dashboard/sideNavigation'
import { ClassroomForm } from 'sections/dashboard/classroomForm'
import { Footer } from 'sections/footer'

// New Classroom

class NewClassroom extends React.Component {
  static async getInitialProps() {
    return {}
  }

  render() {
    return (
      <Fragment>
        <Navigation activePage="dashboard" />
        <SideNavigation activeSection="">
          <ClassroomForm />
        </SideNavigation>
        <Footer />
      </Fragment>
    )
  }
}

export default NewClassroom
