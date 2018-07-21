import React from 'react'

import { Body } from 'pages/live/components/Body'
import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'

import { lessons } from 'data/lessons'

class LiveLessonPage extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <>
        <Navbar activePage="lesson" />
        <Body data={{ lesson: lessons[0] }} />
        <Footer />
      </>
    )
  }
}

export default LiveLessonPage
