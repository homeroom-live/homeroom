import React from 'react'
import { redirect } from '../../../lib/redirect'

class Classes extends React.Component {
  static async getInitialProps(ctx) {
    redirect(ctx, '/dashboard')
  }

  render() {
    return null
  }
}

export default Classes
