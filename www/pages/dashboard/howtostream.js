import React from 'react'

// Sections

import { Navigation } from 'sections/navigation'
import { SideNavigation } from 'sections/dashboard/sideNavigation'
import { HowToStream } from 'sections/dashboard/howToStream'
import { Footer } from 'sections/footer'

// Dashboard

class DashboardHowToStream extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navigation />
        <SideNavigation activePage="howtostream">
          <HowToStream />
        </SideNavigation>
        <Footer />
      </>
    )
  }
}

export default DashboardHowToStream
