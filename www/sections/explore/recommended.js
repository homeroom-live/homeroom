import React, { Fragment } from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { IconHeader } from 'components/IconHeader'
import { Text } from 'components/Text'
import { ClassCardMedium, ClassCardLarge } from 'components/ClassCard'

import { mockClasses } from 'sections/explore/data'
import { colors, spacing } from 'utils/theme'
import iconVideo from 'static/assets/icons/ui/video.svg'
import iconCalendar from 'static/assets/icons/ui/calendar.svg'
import iconHome from 'static/assets/icons/ui/home.svg'
import iconClock from 'static/assets/icons/ui/clock.svg'

const ContainerRow = styled(FlexRow)`
  align-items: flex-start;
`
const StickyHeader = styled(IconHeader)`
  position: sticky;
  top: 0;
  background: ${colors.white};
`
const SideNavigationCol = styled(FlexCol)`
  width: 250px;
  height: 100vh;
  background: ${colors.white};
  border-right: 1px solid ${colors.grayLightest};
`
const HeroCol = styled(FlexCol)`
  max-width: 768px;
  margin: 0 auto;
  border-left: 1px solid ${colors.grayLightest};
  border-right: 1px solid ${colors.grayLightest};
`
const RecommendedRow = styled(FlexRow)`
  align-items: flex-start;
`
const RecommendedCol = styled(FlexCol)`
  height: 631px;
  max-width: 300px;
  overflow: auto;
`
const RecommendedClassCardMedium = styled(ClassCardMedium)``

export const RecommendedClasses = ({ classes = mockClasses }) => (
  <ContainerRow>
    <SideNavigationCol>
      <Text>SIDENAV</Text>
    </SideNavigationCol>

    <HeroCol>
      <StickyHeader src={iconVideo} value="Recommended Classes" />

      <ClassCardLarge
        node={mockClasses[0]}
        key={'9'}
        href={`/class/${mockClasses[0].id}`}
        teachers={mockClasses[0].teachers}
      />
      <RecommendedRow>
        {mockClasses.map(node => (
          <ClassCardMedium
            node={node}
            key={node.id}
            href={`/class/${node.id}`}
            teachers={node.teachers}
          />
        ))}
      </RecommendedRow>
    </HeroCol>

    <SideNavigationCol>
      <Text>FAVORITE CLASSROOMS</Text>
    </SideNavigationCol>
  </ContainerRow>
)

// < FlexRow >
// {
//   mockClasses.map(node => (
//     <ClassCardMedium
//       node={node}
//       key={node.id}
//       href={`/class/${node.id}`}
//       teachers={node.teachers}
//     />
//   ))
// }
//     </FlexRow >
