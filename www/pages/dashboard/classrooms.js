import React from 'react'

// Sections

import { Navigation } from '../../sections/navigation'
import { SideNavigation } from '../../sections/dashboard/sideNavigation'
import { Footer } from '../../sections/footer'

// Classrooms

class DashboardClassrooms extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navigation />
        <SideNavigation activePage="classrooms">foo</SideNavigation>
        <Footer />
      </>
    )
  }
}

export default DashboardClassrooms
