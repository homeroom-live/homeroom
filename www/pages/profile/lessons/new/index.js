import React from 'react'

import { SideNav } from 'pages/profile/components/SideNav'
import { LessonForm } from 'pages/profile/lessons/new/components/LessonForm'
import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'
import { withLogin } from 'hocs/withLogin'
import { withSetup } from 'hocs/withSetup'

import { viewer } from 'data/viewer'

class NewLessonPage extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navbar activePage="profile" />
        <SideNav data={{ viewer }} activeSection="lessons">
          <LessonForm />
        </SideNav>
        <Footer />
      </>
    )
  }
}

export default withLogin(withSetup(NewLessonPage))
