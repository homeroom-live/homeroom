import React from 'react'
import gql from 'graphql-tag'

// Sections

import { Navigation } from '../../sections/navigation'
import { SideNavigation } from '../../sections/explore/sideNavigation'
import { Classes } from '../../sections/explore/classes'
import { Footer } from '../../sections/footer'

// Explore

class Upcoming extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  query = gql`
    query {
      classes: upcomingClasses(first: 10) {
        edges {
          node {
            id
            name
            description
          }
        }
        aggregate {
          count
        }
      }
    }
  `

  render() {
    return (
      <>
        <Navigation />
        <SideNavigation active="upcoming">
          <Classes query={this.query} />
        </SideNavigation>
        <Footer />
      </>
    )
  }
}

export default Upcoming
