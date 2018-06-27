import React, { Fragment } from 'react'

import { redirect } from '../../../lib/redirect'

// Sections

import { Navigation } from '../../../sections/navigation'
import { SideNavigation } from '../../../sections/dashboard/sideNavigation'
import { ClassForm } from '../../../sections/dashboard/classForm'
import { Footer } from '../../../sections/footer'

// New Class

class NewClass extends React.Component {
  static async getInitialProps(ctx) {
    if (!ctx.query.classroomId) {
      return redirect(ctx, '/dashboard/classes')
    } else {
      return {}
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <SideNavigation activePage="class">
          <ClassForm />
        </SideNavigation>
        <Footer />
      </Fragment>
    )
  }
}

export default NewClass
