import React from 'react'

// Sections

import { Navigation } from '../../sections/navigation'
import { SideNavigation } from '../../sections/dashboard/sideNavigation'
import { Footer } from '../../sections/footer'

// Dashboard

class Dashboard extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navigation />
        <SideNavigation activePage="classes">foo</SideNavigation>
        <Footer />
      </>
    )
  }
}

export default Dashboard
