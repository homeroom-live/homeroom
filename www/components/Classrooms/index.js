import React from 'react'
import { NetworkStatus } from 'apollo-client'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { Thumbnail } from 'components/Thumbnail'
import { Link } from 'components/Link'
import { Text } from 'components/Text'

import { spacing, colors, transition, opacity, borderRadius } from 'utils/theme'

const Classroom = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${spacing.small} ${spacing.regular};
  opacity: ${opacity};
  transition: ${transition};
  border-radius: ${borderRadius};

  &:hover {
    text-decoration: none;
    opacity: 1;
    background: ${colors.grayLightest};
  }
`
const ClassroomText = styled(Text)`
  margin-left: ${spacing.small};
  margin-bottom: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const Classrooms = ({ networkStatus, data }) => {
  switch (networkStatus) {
    case NetworkStatus.ready: {
      return (
        <FlexCol>
          {data.map(({ node }) => (
            <Classroom key={node.id} href={`/${node.username}`}>
              <Thumbnail size="small" src={node.picture.url} />
              <ClassroomText weight="bold" color="secondary" size="small">
                {node.name}
              </ClassroomText>
            </Classroom>
          ))}
        </FlexCol>
      )
    }

    case NetworkStatus.loading:
    default: {
      return null
    }
  }
}
