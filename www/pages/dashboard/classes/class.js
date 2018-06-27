import React, { Fragment } from 'react'

// Sections

import { Navigation } from '../../../sections/navigation'
import { SideNavigation } from '../../../sections/dashboard/sideNavigation'
import { Footer } from '../../../sections/footer'

// Class

class Class extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <SideNavigation activePage="class">foo</SideNavigation>
        <Footer />
      </Fragment>
    )
  }
}

export default Class
