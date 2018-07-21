import React from 'react'

import { SideNav } from 'pages/profile/components/SideNav'
import { UserForm } from 'pages/profile/user/components/UserForm'
import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'
import { withLogin } from 'hocs/withLogin'
import { withSetup } from 'hocs/withSetup'

import { viewer } from 'data/viewer'

class UserProfilePage extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navbar activePage="profile" />
        <SideNav data={{ viewer }} activeSection="">
          <UserForm />
        </SideNav>
        <Footer />
      </>
    )
  }
}

export default withLogin(withSetup(UserProfilePage))
