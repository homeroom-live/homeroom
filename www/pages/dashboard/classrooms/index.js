import React from 'react'
import { redirect } from '../../../lib/redirect'

class Classrooms extends React.Component {
  static async getInitialProps(ctx) {
    redirect(ctx, '/dashboard')
  }

  render() {
    return null
  }
}

export default Classrooms
