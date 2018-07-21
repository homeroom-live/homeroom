import React from 'react'

import { SideNav } from 'pages/profile/components/SideNav'
import { Body } from 'pages/profile/lessons/components/Body'
import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'
import { withLogin } from 'hocs/withLogin'
import { withSetup } from 'hocs/withSetup'

import { viewer } from 'data/viewer'
import { lessons } from 'data/lessons'

class LessonsPage extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navbar activePage="profile" />
        <SideNav data={{ viewer }} activeSection="lessons">
          <Body data={{ lessons }} />
        </SideNav>
        <Footer />
      </>
    )
  }
}

export default withLogin(withSetup(LessonsPage))
