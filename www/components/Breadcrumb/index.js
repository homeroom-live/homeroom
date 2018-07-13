import React from 'react'
import styled from 'styled-components'

import { Link } from 'components/Link'
import { Icon } from 'components/Icon'

import { spacing } from 'utils/theme'
import iconArrow from 'static/assets/icons/ui/arrow-left-green.svg'

const BreadcrumbLink = styled(Link)`
  display: flex;
  margin-bottom: ${spacing.small};
`

export const Breadcrumb = ({ href, children, className }) => (
  <BreadcrumbLink href={href} size="small" weight="bold" className={className}>
    {`\u2190 `}
    {children}
  </BreadcrumbLink>
)
