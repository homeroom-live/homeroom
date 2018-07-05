import React from 'react'

// Sections

import { Navigation } from 'sections/navigation'
import { SideNavigation } from 'sections/dashboard/sideNavigation'
import { ClassroomsCoverflow } from 'sections/dashboard/classroomsCoverflow'
import { Footer } from 'sections/footer'

// Classes

class Classes extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navigation />
        <SideNavigation activePage="classes">
          <ClassroomsCoverflow />
        </SideNavigation>
        <Footer />
      </>
    )
  }
}

export default Classes
