import React from 'react'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'

import { FilePicker } from 'components/FilePicker'
import { ImagePicker } from 'components/ImagePicker'
import { VideoPicker } from 'components/VideoPicker'
import { DatePicker } from 'components/DatePicker'
import { Loading } from 'components/Loading'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Text } from 'components/Text'
import { IconHeader } from 'components/IconHeader'
import { Link } from 'components/Link'
import { Button } from 'components/Button'
import { Icon } from 'components/Icon'
import { Label } from 'components/Label'
import { Input } from 'components/Input'
import { Textarea } from 'components/Textarea'
import { Breadcrumb } from 'components/Breadcrumb'

import { shadow, spacing, outline, colors } from 'utils/theme'
import iconCheck from 'static/assets/icons/ui/check.svg'
import iconVideoWhite from 'static/assets/icons/ui/video-white.svg'
import iconVideo from 'static/assets/icons/ui/video.svg'

const NewLessonCol = styled(FlexCol)`
  margin: ${spacing.medium};
  margin-bottom: ${spacing.xlarge};
`
const NewLessonHeader = styled(IconHeader)`
  ${outline()};
  margin-bottom: ${spacing.regular};
`
const SaveButton = styled(Button)`
  margin-left: auto;
`
const NewLessonForm = styled.form`
  display: flex;
  align-items: flex-start;
`
const NewLessonFormCol = styled(FlexCol)`
  margin-right: ${spacing.xlarge};
`
const ThumbnailCol = styled(FlexCol)`
  flex: 0;
  margin-right: ${spacing.medium};
`
const NewLessonMetaRow = styled(FlexRow)`
  align-items: flex-start;
`
const LessonNameLabel = styled(Label)`
  margin-bottom: ${spacing.regular};
`

const CardCol = styled(FlexCol)`
  align-items: center;
  justify-content: flex-start;
  margin: ${spacing.medium};
  margin-top: ${spacing.xxlarge};
`
const Card = styled(FlexCol)`
  ${shadow()};
  max-width: 384px;
`
const CardBody = styled(FlexCol)`
  padding: ${spacing.regular};
`
const CardFooter = styled(FlexRow)`
  justify-content: flex-end;
`
const CardTitleLink = styled(Link)`
  margin-bottom: ${spacing.xsmall};
  &:hover {
    text-decoration: underline;
  }
`
const CardText = styled(Text)`
  margin-bottom: ${spacing.medium};
`
const LiveLink = styled(Link)`
  margin-left: ${spacing.small};
`
const BigSaveButton = styled(Button)`
  padding: ${spacing.regular};
  border: 1px solid ${colors.grayLighter};
`

// GraphQL

const createLesson = gql`
  mutation CreateLesson(
    $LessonroomId: ID!
    $name: String!
    $description: String!
    $thumbnail: Upload
    $video: Upload
    $price: Float!
    $schedule: DateTime
    $files: [Upload!]!
  ) {
    createLesson(
      Lesson: $LessonroomId
      name: $name
      description: $description
      thumbnail: $thumbnail
      video: $video
      price: $price
      schedule: $schedule
      files: $files
    ) {
      id
      name
      description
    }
  }
`

class _LessonForm extends React.Component {
  state = {
    name: '',
    description: '',
    thumbnail: null,
    video: null,
    price: '',
    schedule: null,
    files: [],
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    })
  }

  handleDescriptionChange = e => {
    this.setState({
      description: e.target.value,
    })
  }

  handleThumbnailChange = thumbnail => {
    this.setState({
      thumbnail: thumbnail,
    })
  }

  handleThumbnailRemove = e => {
    this.setState({
      thumbnail: null,
    })
  }

  handleVideoChange = video => {
    this.setState({
      video: video,
    })
  }

  handleVideoRemove = () => {
    this.setState({
      video: null,
    })
  }

  handlePriceChange = e => {
    this.setState({
      price: e.target.value,
    })
  }

  handleScheduleChange = date => {
    this.setState({
      schedule: date,
    })
  }

  handleFilesChange = files => {
    this.setState({
      files,
    })
  }

  getLessonStreamURL = lessonId => {
    return `/profile/lessons/${lessonId}`
  }

  render() {
    return (
      <Mutation
        mutation={createLesson}
        variables={{
          Lesson: this.props.router.query.LessonroomId,
          name: this.state.name,
          description: this.state.description,
          thumbnail: this.state.thumbnail,
          video: this.state.video,
          price: this.state.price,
          schedule: this.state.schedule,
          files: this.state.files,
        }}
      >
        {(create, { loading, error, data }) => {
          if (loading) {
            return <Loading />
          } else if (error) {
            return 'something went wrong'
          } else if (data) {
            return (
              <CardCol>
                <Card>
                  <IconHeader src={iconCheck} value="Lesson Created!" />
                  <CardBody>
                    <CardTitleLink
                      href={`/dashboard/lessons/lesson/${data.createLesson.id}`}
                      color="secondary"
                      weight="bold"
                    >
                      {data.createLesson.name}
                    </CardTitleLink>
                    <CardText>{data.createLesson.description}</CardText>
                    <CardFooter>
                      <Link
                        href={{
                          pathname: `/dashboard/lessons/lesson/`,
                          query: {
                            lessonId: data.createLesson.id,
                          },
                        }}
                        as={`/dashboard/lessons/lesson/${data.createLesson.id}`}
                        textDecoration="none"
                      >
                        <Button color="secondary">Preview Lesson</Button>
                      </Link>
                      <LiveLink
                        href={`/dashboard/lessons/lesson/${
                          data.createLesson.id
                        }`}
                      >
                        <Button color="primary">
                          <Icon src={iconVideoWhite} inline />
                          Go Live
                        </Button>
                      </LiveLink>
                    </CardFooter>
                  </CardBody>
                </Card>
              </CardCol>
            )
          } else {
            return (
              <NewLessonCol>
                <Breadcrumb href="/profile/lessons">Back to Lessons</Breadcrumb>
                <NewLessonHeader src={iconVideo} value="Create New Lesson">
                  <SaveButton color="primary" onClick={create}>
                    Save Lesson
                  </SaveButton>
                </NewLessonHeader>
                <NewLessonForm onSubmit={create}>
                  <NewLessonFormCol>
                    <LessonNameLabel>
                      Lesson Name
                      <Input
                        type="text"
                        onChange={this.handleNameChange}
                        value={this.state.name}
                      />
                    </LessonNameLabel>
                    <Label size="regular">
                      Lesson Date & Time{' '}
                      <DatePicker
                        showTimeSelect
                        name="schedule"
                        type="date"
                        dateFormat="M/D/YY – h:mma"
                        timeFormat="h:mm a"
                        customInput={<Input type="text" />}
                        selected={this.state.schedule}
                        onChange={this.handleScheduleChange}
                      />
                    </Label>
                    <Label>
                      Lesson Description
                      <Textarea
                        onChange={this.handleDescriptionChange}
                        value={this.state.description}
                      />
                    </Label>
                  </NewLessonFormCol>
                  <FlexCol>
                    <Label>
                      Lesson Video
                      <VideoPicker
                        value={this.state.video}
                        onChange={this.handleVideoChange}
                        onRemove={this.handleVideoRemove}
                      />
                    </Label>
                    <Label>
                      Lesson Files
                      <FilePicker
                        value={this.state.files}
                        onChange={this.handleFilesChange}
                        onRemove={() => {}}
                      />
                    </Label>
                  </FlexCol>
                </NewLessonForm>
                <BigSaveButton color="tertiary" type="submit">
                  Save Profile
                </BigSaveButton>
              </NewLessonCol>
            )
          }
        }}
      </Mutation>
    )
  }
}

export const LessonForm = withRouter(_LessonForm)
