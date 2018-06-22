import React from 'react'
import glamorous from 'glamorous'

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

import Thumbnail from 'components/Thumbnail'

import spacing from 'styles/spacing'
import colors from 'styles/colors'
import typography from 'styles/typography'

const toggleStyles = {
  padding: 0,
  background: 'transparent',
  border: 'none',
}

const Item = glamorous(DropdownItem)({
  padding: `${spacing.small} ${spacing.regular}`,
  background: 'transparent !important',
  fontSize: typography.fontSize.small,
  color: `${colors.secondary} !important`,
  borderRadius: '4px',
  cursor: 'pointer',

  ':hover': {
    background: `${colors.grayLighter} !important`,
  },
  ':focus': {
    background: `${colors.grayLighter} !important`,
  },
  ':active': {
    background: `${colors.grayLighter} !important`,
  },
})

class UserDropdown extends React.Component {
  static fragments = {
    user: gql`
      fragment UserDropdownUser on User {
        id
        picture {
          id
          url
        }
      }
    `,
  }

  static propTypes = {
    user: propType(UserDropdown.fragments.user).isRequired,
  }

  render() {
    const { user } = this.props
    return (
      <UncontrolledDropdown style={{ display: 'flex' }}>
        <DropdownToggle style={toggleStyles}>
          <Thumbnail src={user.picture.url} size="regular" />
        </DropdownToggle>

        <DropdownMenu>
          <LinkContainer to="/profile/about">
            <Item>Profile</Item>
          </LinkContainer>

          <Item onClick={logout}>Logout</Item>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
}

export default UserDropdown
