import React from 'react'
import { redirect } from '../../../lib/redirect'

class DashboardClasses extends React.Component {
  static async getInitialProps(ctx) {
    redirect(ctx, '/dashboard')
  }
}

export default DashboardClasses
