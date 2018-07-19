import React from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { IconHeader } from 'components/IconHeader'
import { Button } from 'components/Button'
import { Link } from 'components/Link'
import { ClassCardLarge } from 'components/ClassCard'

import { mockClasses } from 'sections/explore/data'
import { colors, spacing, shadow, borderRadius } from 'utils/theme'
import iconVideo from 'static/assets/icons/ui/video.svg'
import iconCalendar from 'static/assets/icons/ui/calendar.svg'
import iconClock from 'static/assets/icons/ui/clock.svg'

const ContainerRow = styled(FlexRow)`
  align-items: flex-start;
  scroll-behavior: smooth;
`
const StickyHeader = styled(IconHeader)`
  position: sticky;
  top: 0;
  z-index: 4;
  background: ${colors.white};
  border-top-right-radius: ${borderRadius};
  border-top-left-radius: ${borderRadius};
`
const SideNavigationCol = styled(FlexCol)`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 250px !important;
  height: 100vh;
  padding: ${spacing.medium};
  background: ${colors.white};
  border-right: 1px solid ${colors.grayLightest};
  box-shadow: 15px 0 30px 0 rgba(66, 75, 84, 0.1);
  box-sizing: border-box;
`
const HeroCol = styled(FlexCol)`
  max-width: 1024px;
  margin: ${spacing.medium} auto;
  padding: 0 ${spacing.medium};
  scroll-behavior: smooth;
`
const ClassCardLargeSecondary = styled(ClassCardLarge)`
  max-width: 33%;
`
const SectionCol = styled(FlexCol)`
  ${shadow()};
  margin-bottom: ${spacing.medium};
  scroll-behavior: smooth;
`
const SectionRow = styled(FlexRow)`
  flex-wrap: wrap;
  scroll-behavior: smooth;
`
const ShowMoreButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 1px solid ${colors.grayLighter};
`
const SideNavigationButton = styled(Button)`
  justify-content: flex-start;
`
const TeachLink = styled(Link)`
  margin-top: auto;
`
const TeachButton = styled(Button)`
  width: 100%;
`

const scrollToId = id =>
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
  })

export const Content = ({ classes = mockClasses }) => (
  <ContainerRow>
    <SideNavigationCol>
      <SideNavigationButton
        color="tertiary"
        src={iconVideo}
        onClick={() => scrollToId('#recommendedClasses')}
      >
        Recommended
      </SideNavigationButton>
      <SideNavigationButton
        color="tertiary"
        src={iconClock}
        onClick={() => scrollToId('#recentClasses')}
      >
        Recent
      </SideNavigationButton>
      <SideNavigationButton
        color="tertiary"
        src={iconCalendar}
        onClick={() => scrollToId('#upcomingClasses')}
      >
        Upcoming
      </SideNavigationButton>
      <TeachLink href="/teach">
        <TeachButton color="primary">Start Teaching</TeachButton>
      </TeachLink>
    </SideNavigationCol>

    <HeroCol>
      <SectionCol id="recommendedClasses">
        <StickyHeader src={iconVideo} value="Recommended Classes" />
        <SectionRow>
          {mockClasses
            .slice(0, 2)
            .map(node => (
              <ClassCardLarge
                node={node}
                key={node.id}
                href={`/class/${node.id}`}
                teachers={node.teachers}
                size="medium"
              />
            ))}
          {mockClasses.map(node => (
            <ClassCardLargeSecondary
              node={node}
              key={node.id}
              href={`/class/${node.id}`}
              teachers={node.teachers}
              size="regular"
            />
          ))}
          <ShowMoreButton color="tertiary">Show More</ShowMoreButton>
        </SectionRow>
      </SectionCol>

      <SectionCol id="recentClasses">
        <StickyHeader src={iconClock} value="Recent Classes" />
        <SectionRow>
          {mockClasses
            .slice(0, 2)
            .map(node => (
              <ClassCardLarge
                node={node}
                key={node.id}
                href={`/class/${node.id}`}
                teachers={node.teachers}
                size="medium"
              />
            ))}
          {mockClasses.map(node => (
            <ClassCardLargeSecondary
              node={node}
              key={node.id}
              href={`/class/${node.id}`}
              teachers={node.teachers}
              size="regular"
            />
          ))}
        </SectionRow>
      </SectionCol>

      <SectionCol id="upcomingClasses">
        <StickyHeader src={iconCalendar} value="Upcoming Classes" />
        <SectionRow>
          {mockClasses
            .slice(0, 2)
            .map(node => (
              <ClassCardLarge
                node={node}
                key={node.id}
                href={`/class/${node.id}`}
                teachers={node.teachers}
                size="medium"
              />
            ))}
          {mockClasses.map(node => (
            <ClassCardLargeSecondary
              node={node}
              key={node.id}
              href={`/class/${node.id}`}
              teachers={node.teachers}
              size="regular"
            />
          ))}
        </SectionRow>
      </SectionCol>
    </HeroCol>
  </ContainerRow>
)
