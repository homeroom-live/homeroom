import React from 'react'
import styled from 'styled-components'

import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Header } from 'components/Header'
import { Link } from 'components/Link'
import { Button } from 'components/Button'
import { Thumbnail } from 'components/Thumbnail'
import { TextStyle } from 'components/TextStyle'
import { Text } from 'components/Text'

import { spacing, outline, colors } from 'utils/theme'
import iconPlusCircleWhite from 'static/assets/icons/ui/plus-circle-white.svg'
import iconVideoWhite from 'static/assets/icons/ui/video-white.svg'

const inlineStyles = () => `
  border: none;
  border-bottom: 1px solid ${colors.grayLighter};
  border-radius: 0;
`

const ClassroomHeaderContainer = styled(FlexRow)`
  padding: ${spacing.regular};
  ${outline()};
  ${props => (props.inline ? inlineStyles() : null)};
`
const ClassroomMeta = styled(FlexCol)`
  width: initial;
`
const MetaRow = styled(FlexRow)`
  flex: 1;
`
const ActionRow = styled(FlexRow)`
  flex: 0;
  margin-left: auto;
`
const ClassroomTitle = styled(Header)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const ClassroomThumbnail = styled(Thumbnail)`
  margin-right: ${spacing.regular};
  cursor: pointer;
`
const ActionLink = styled(Link)`
  margin-left: ${spacing.small};
`

export const ClassroomHeader = ({
  id,
  name,
  numberOfClasses,
  teachers,
  children,
  ...props
}) => (
  <ClassroomHeaderContainer {...props}>
    <MetaRow>
      <Link href={`/dashboard/classrooms/classroom/${id}`}>
        <ClassroomThumbnail
          size="xlarge"
          src="http://www.bistiproofpage.com/wp-content/uploads/2018/04/cute-profile-pics-for-whatsapp-images.png"
        />
      </Link>
      <ClassroomMeta>
        {teachers.map((node, index) => (
          <Link
            key={node.id}
            href={'TEST' || node.url}
            size="small"
            weight="bold"
          >
            {node.name}
            {index > 0 && index !== teachers.length - 1 && ', '}
          </Link>
        ))}
        <Link href={`/dashboard/classrooms/classroom/${id}`}>
          <ClassroomTitle size="xlarge">{name}</ClassroomTitle>
        </Link>
        <Text size="small" color="gray" weight="bold">
          XXXXX Subscribers – {numberOfClasses} Classes
        </Text>
      </ClassroomMeta>
    </MetaRow>

    <ActionRow>
      {children}
      <ActionLink href={`/dashboard/live/${id}`}>
        <Button color="primary" src={iconVideoWhite}>
          Go Live
        </Button>
      </ActionLink>
      <ActionLink
        href={`/dashboard/classes/new?classroomId=${id}`}
        as={`/dashboard/classes/new/${id}`}
        prefetch
      >
        <Button color="primary" src={iconPlusCircleWhite}>
          New Class
        </Button>
      </ActionLink>
    </ActionRow>
  </ClassroomHeaderContainer>
)
