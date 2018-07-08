import React from 'react'

// Sections

import { Navigation } from 'sections/navigation'
import { SideNavigation } from 'sections/dashboard/sideNavigation'
import { ClassroomsCoverflow } from 'sections/dashboard/classroomsCoverflow'
import { Footer } from 'sections/footer'

// HOCs

import { withLogin } from 'hocs/withLogin'
import { withSetup } from 'hocs/withSetup'

// Dashboard

class Dashboard extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navigation activePage="dashboard" />
        <SideNavigation activeSection="">
          <ClassroomsCoverflow />
        </SideNavigation>
        <Footer />
      </>
    )
  }
}

export default withLogin(withSetup(Dashboard))
