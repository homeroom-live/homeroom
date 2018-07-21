import React from 'react'

import { SideNav } from 'pages/profile/components/SideNav'
import { Body } from 'pages/profile/courses/components/Body'
import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'
import { withLogin } from 'hocs/withLogin'
import { withSetup } from 'hocs/withSetup'

import { viewer } from 'data/viewer'
import { courses } from 'data/courses'

class CoursesPage extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navbar activePage="profile" />
        <SideNav data={{ viewer }} activeSection="courses">
          <Body data={{ courses }} />
        </SideNav>
        <Footer />
      </>
    )
  }
}

export default withLogin(withSetup(CoursesPage))
