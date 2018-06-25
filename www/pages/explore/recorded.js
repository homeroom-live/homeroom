import React from 'react'
import gql from 'graphql-tag'

// Sections

import { Navigation } from '../../sections/navigation'
import { SideNavigation } from '../../sections/explore/sideNavigation'
import { Classes } from '../../sections/explore/classes'
import { Footer } from '../../sections/footer'

// Explore

class Recorded extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  query = gql`
    query {
      classes: recordedClasses {
        count
        classes(first: 10) {
          id
          name
        }
      }
    }
  `

  render() {
    return (
      <>
        <Navigation />
        <SideNavigation active="recorded">
          <Classes query={this.query} />
        </SideNavigation>
        <Footer />
      </>
    )
  }
}

export default Recorded