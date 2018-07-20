import React from 'react'
import gql from 'graphql-tag'

// Sections

import { Navigation } from 'sections/navigation'
import { Footer } from 'sections/footer'
import { ExploreSection } from 'sections/explore'
import { Welcome } from 'sections/explore/welcome'

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
        <Welcome />
        <ExploreSection />
        <Footer />
      </>
    )
  }
}

export default Suggestions
