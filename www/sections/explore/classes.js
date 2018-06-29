import React from 'react'
import { Query } from 'react-apollo'

// Components

import { FlexCol } from '../../components/FlexCol'
import { Loading } from '../../components/Loading'
import { EmptyState } from '../../components/EmptyState'
import { ClassCard } from '../../components/ClassCard'

// Icons

import iconBuildingGray from '../../static/assets/icons/ui/building-gray.svg'

// Styles

import { spacing } from '../../utils/spacing'

// Navigation

export const Classes = ({ query }) => (
  <Query query={query} notifyOnNetworkStatusChange>
    {({ networkStatus, data }) => {
      switch (networkStatus) {
        case 1: {
          return <Loading />
        }
        case 7: {
          return (
            <FlexCol css={{ marginBottom: spacing.xlarge }}>
              {data.classes.edges.map(({ node }) => (
                <ClassCard key={node.id} data={node} />
              ))}

              {data.classes.aggregate.count === 0 && (
                <EmptyState
                  icon={iconBuildingGray}
                  text={'No classes found... for now!'}
                />
              )}
            </FlexCol>
          )
        }
        default: {
          return null
        }
      }
    }}
  </Query>
)
