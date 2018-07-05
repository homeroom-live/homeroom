import React from 'react'

import { Navigation } from 'sections/navigation'
import { Edit } from 'sections/profile/edit'
import { Footer } from 'sections/footer'

class Profile extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navigation />
        <Edit />
        <Footer />
      </>
    )
  }
}

export default Profile
