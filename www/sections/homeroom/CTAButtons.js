import React from 'react'
import { withRouter } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'

import FlexRow from 'components/FlexRow'
import Button from 'components/Button'
import { auth0Lock } from 'services/auth0'

import spacing from 'styles/spacing'

class CTAButtons extends React.Component {
  showAuth0Lock = () => auth0Lock.show({
    initialScreen: 'signUp'
  })

  handleBecomeTeacher = () => this.props.history.push('/become-a-teacher')

  render() {
    const { css, meQuery } = this.props
    const isLoggedIn = !meQuery.loading && meQuery.me
    return (
      <FlexRow css={{ marginTop: spacing.regular, ...css }}>
        <Button
          theme="primary"
          onClick={(isLoggedIn) ? this.handleBecomeTeacher : this.showAuth0Lock}
          css={{ marginRight: spacing.small }}
        >
          Become a Teacher
        </Button>

        <LinkContainer to="/browse">
          <Button theme="secondary">
            Browse Classes
          </Button>
        </LinkContainer>
      </FlexRow>
    )
  }
}

const ME_QUERY = gql`
  query Me {
    me {
      id
      isTeacher
    }
  }
`

export default compose(
  withRouter,
  graphql(ME_QUERY, {
    name: 'meQuery'
  })
)(CTAButtons)
