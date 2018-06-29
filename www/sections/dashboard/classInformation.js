import React, { Fragment } from 'react'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

// Components

import { Loading } from '../../components/Loading'

// GraphQL

const classQuery = gql`
  query ClassQuery($classId: ID!) {
    class(id: $classId) {
      id
    }
  }
`

// Class Information

export const ClassInformation = withRouter(({ router }) => (
  <Query
    query={classQuery}
    variables={{ classId: router.query.classId }}
    notifyOnNetworkStatusChange
  >
    {({ networkStatus, data }) => {
      switch (networkStatus) {
        case 1: {
          return <Loading />
        }
        case 7: {
          return <Fragment>ya boi</Fragment>
        }
        default: {
          return null
        }
      }
    }}
  </Query>
))
