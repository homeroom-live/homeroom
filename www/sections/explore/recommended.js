import React, { Fragment } from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { IconHeader } from 'components/IconHeader'
import { Container } from 'components/Container'
import {
  ClassCardSmall,
  ClassCardMedium,
  ClassCardLarge,
} from 'components/ClassCard'

import { spacing, shadow, colors } from 'utils/theme'
import iconVideo from 'static/assets/icons/ui/video.svg'
import iconCalendar from 'static/assets/icons/ui/calendar.svg'
import iconHome from 'static/assets/icons/ui/home.svg'

const RecommendedCol = styled(Container)`
  ${shadow()};
  align-items: center;
  margin: ${spacing.medium} auto;
`
const RecommendedBody = styled(FlexCol)`
  align-items: center;
  width: 100%;
`

const mockClasses = [
  {
    id: '123',
    name: 'My Test Class',
    schedule: new Date(),
    teachers: [
      {
        id: '123',
        name: 'Baba O‘Reilly',
      },
    ],
  },
  {
    id: '123',
    name: 'My Test Class',
    schedule: new Date(),
    teachers: [
      {
        id: '123',
        name: 'Baba O‘Reilly',
      },
    ],
  },
  {
    id: '123',
    name: 'My Test Class',
    schedule: new Date(),
    teachers: [
      {
        id: '123',
        name: 'Baba O‘Reilly',
      },
    ],
  },
]

export const RecommendedClasses = ({ classes = mockClasses }) => (
  <Fragment>
    <RecommendedCol>
      <IconHeader src={iconVideo} value="Recent/Recommended Classes" />
      <RecommendedBody>
        <ClassCardLarge
          node={classes[0]}
          key={classes[0].id}
          href={`/explore`}
          teachers={classes[0].teachers}
        />
      </RecommendedBody>

      <FlexRow>
        {classes.map(node => (
          <ClassCardMedium
            node={node}
            key={node.id}
            href={`/explore`}
            teachers={node.teachers}
          />
        ))}
      </FlexRow>
    </RecommendedCol>

    <RecommendedCol>
      <IconHeader src={iconCalendar} value="Upcoming Classes" />
      <FlexCol>
        {classes.map(node => (
          <ClassCardSmall
            node={node}
            key={node.id}
            href={`/explore`}
            teachers={node.teachers}
          />
        ))}
      </FlexCol>
    </RecommendedCol>

    <RecommendedCol>
      <IconHeader src={iconHome} value="Recommended Classrooms" />
      <FlexRow>
        {classes.map(node => (
          <ClassCardMedium
            node={node}
            key={node.id}
            href={`/explore`}
            teachers={node.teachers}
          />
        ))}
      </FlexRow>
    </RecommendedCol>
  </Fragment>
)
