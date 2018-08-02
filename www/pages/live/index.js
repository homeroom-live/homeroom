import React from 'react'
import gql from 'graphql-tag'

import { Body } from 'pages/live/components/Body'
import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'
import { LessonCard, fragments } from 'components/LessonCard'

const userQuery = gql`
  query UserQuery($username: String!, $lessonId: ID) {
    user {
      id
      name
      username
      picture {
        id
        url
      }
      live {
        id
        name
        schedule
        description
        price
        thumbnail {
          id
          url
        }
        vod {
          id
          url
        }
        filesConnection {
          edges {
            node {
              id
              name
              url
            }
          }
        }
      }
    }
  }
  ${fragments.card}
`

class LiveLessonPage extends React.Component {
  static async getInitialProps(ctx) {
    return {
      // if (!this.props.lessonId) {
      // }
    }
  }

  render() {
    return (
      <>
        <Navbar activePage="lesson" />
        <Body data={{ lesson: {} }} />
        <Footer />
      </>
    )
  }
}

export default LiveLessonPage
