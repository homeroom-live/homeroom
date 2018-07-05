import React from 'react'

// Sections

import { Navigation } from 'sections/navigation'
import { UserInfoForm } from 'sections/setup/userInfoForm'
import { Footer } from 'sections/footer'

// HOCs

import { withLogin } from 'hocs/withLogin'

// Setup

class Setup extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navigation />
        <UserInfoForm />
        <Footer />
      </>
    )
  }
}

export default withLogin(Setup)
