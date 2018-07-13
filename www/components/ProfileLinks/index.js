import React from 'react'
import { Link } from 'components/Link'

import { FlexRow } from 'components/FlexRow'

export const ProfileLinks = ({ users }) => (
  <FlexRow>
    {users.map((node, index) => (
      <Link key={node.id} href={'TEST'} size="small" weight="bold">
        {'Teacher Name' || node.name}
        {index < users.length - 1 && users.length > 1 && `,\u00a0`}
      </Link>
    ))}
  </FlexRow>
)
