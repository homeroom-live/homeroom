import React, { Fragment } from 'react'

import { redirect } from 'lib/redirect'

// Sections

import { Navigation } from 'sections/navigation'
import { SideNavigation } from 'sections/dashboard/sideNavigation'
import { ClassInformation } from 'sections/dashboard/classInformation'
import { Footer } from 'sections/footer'

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
        <Navigation activePage="dashboard" />
        <SideNavigation activeSection="">
          <ClassInformation />
        </SideNavigation>
        <Footer />
      </Fragment>
    )
  }
}

export default Class
