import React from 'react'

// Sections

import { Navigation } from '../../../sections/navigation'
import { SideNavigation } from '../../../sections/dashboard/sideNavigation'
import { ClassroomsCoverflow } from '../../../sections/dashboard/classroomsCoverflow'
import { Footer } from '../../../sections/footer'

// Classrooms

class Classrooms extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navigation />
        <SideNavigation activePage="classrooms">
          <ClassroomsCoverflow />
        </SideNavigation>
        <Footer />
      </>
    )
  }
}

export default Classrooms
