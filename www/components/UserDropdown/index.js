import React from 'react'
import Link from 'next/link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import glamorous from 'glamorous'

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

import { Thumbnail } from '../Thumbnail'

import { spacing } from '../../utils/spacing'
import { colors } from '../../utils/colors'
import * as typography from '../../utils/typography'

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

// GraphQL

const viewerDropdownQuery = gql`
  query {
    viewer {
      user {
        name
      }
    }
  }
`

// User

export const UserDropdown = () => (
  <Query query={viewerDropdownQuery}>
    {({ networkStatus, data }) => {
      switch (networkStatus) {
        case 8: {
          return (
            <UncontrolledDropdown style={{ display: 'flex' }}>
              <DropdownToggle style={toggleStyles}>
                <Thumbnail src={data.viewer.user.picture.url} size="regular" />
              </DropdownToggle>

              <DropdownMenu>
                <Link href="/profile/about">
                  <Item>Profile</Item>
                </Link>

                <Item>
                  <Link href="/logout">
                    <a>Logout</a>
                  </Link>
                </Item>
              </DropdownMenu>
            </UncontrolledDropdown>
          )
        }
        default: {
          return <div>FFF</div>
        }
      }
    }}
  </Query>
)
