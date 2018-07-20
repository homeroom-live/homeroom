import React from 'react'
import styled from 'styled-components'

import { SideNav } from 'pages/explore/components/SideNav'
import { Lessons } from 'pages/explore/components/Lessons'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'

import { spacing } from 'utils/theme'
import iconVideo from 'static/assets/icons/ui/video.svg'
import iconHome from 'static/assets/icons/ui/home.svg'
import iconGraphBar from 'static/assets/icons/ui/graph-bar.svg'

const ContainerRow = styled(FlexRow)`
  align-items: flex-start;
  scroll-behavior: smooth;
`
const HeroCol = styled(FlexCol)`
  max-width: 1024px;
  margin: ${spacing.medium} auto;
  padding: 0 ${spacing.medium};
  scroll-behavior: smooth;
`

export const Body = ({ data }) => (
  <ContainerRow>
    <SideNav />
    <HeroCol>
      <Lessons
        id="liveLessons"
        icon={iconVideo}
        lessons={data.explore.liveLessons}
        label="Live Lessons"
        query={''}
      />
      <Lessons
        id="popularLessons"
        icon={iconGraphBar}
        lessons={data.explore.popularLessons}
        label="Popular Lessons"
        query={''}
      />
      <Lessons
        id="subscribedLessons"
        icon={iconHome}
        lessons={data.explore.subscribedLessons}
        label="Subscribed Lessons"
        query={''}
      />
    </HeroCol>
  </ContainerRow>
)
