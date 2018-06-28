import React, { Fragment } from 'react'

import { redirect } from '../../../lib/redirect'

// Sections

import { Navigation } from '../../../sections/navigation'
import { SideNavigation } from '../../../sections/dashboard/sideNavigation'
import { Footer } from '../../../sections/footer'

// Class

class Class extends React.Component {
  static async getInitialProps(ctx) {
    if (!ctx.query.classId) {
      return redirect(ctx, '/dashboard/classes')
    } else {
      return {}
    }
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
