import React from 'react'
import gql from 'graphql-tag'

// Sections

import { Navigation } from 'sections/navigation'
import { SideNavigation } from 'sections/explore/sideNavigation'
import { Classes } from 'sections/explore/classes'
import { RecommendedClasses } from 'sections/explore/recommended'
import { Footer } from 'sections/footer'

// Explore

class Suggestions extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  query = gql`
    query {
      classes: allClasses(first: 10) {
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
        <Navigation activePage="explore" />
        <RecommendedClasses />
        {/*<SideNavigation activeSection="suggestions">
          <Classes query={this.query} />
    </SideNavigation>*/}
        <Footer />
      </>
    )
  }
}

export default Suggestions
