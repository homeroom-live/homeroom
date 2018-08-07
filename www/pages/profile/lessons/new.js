import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'

// Components

import { Navbar } from 'components/Navbar'
import { SideNav } from 'components/SideNav'
import { FileDropzone } from 'components/FileDropzone'
import { DatePicker, InputWrapper } from 'components/DatePicker'
import { ImagePicker } from 'components/ImagePicker'
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
import { File } from 'components/File'
import { Footer } from 'components/Footer'

// Icons

import iconCheck from 'static/assets/icons/ui/check.svg'
import iconVideoWhite from 'static/assets/icons/ui/video-white.svg'
import iconVideo from 'static/assets/icons/ui/video.svg'

// HOCs

import { withLogin } from 'hocs/withLogin'

// Utils

import { spacing, outline, colors } from 'utils/theme'

// Elements

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
  flex-direction: column;
`
const NewLessonFormCol = styled(FlexCol)`
  margin-right: ${spacing.xlarge};
`
const NewLessonFormRow = styled(FlexRow)`
  align-items: flex-start;
`
const CardCol = styled(FlexCol)`
  align-items: center;
  justify-content: flex-start;
  margin: ${spacing.medium};
  margin-top: ${spacing.xxlarge};
`
const Card = styled(FlexCol)`
  max-width: 384px;
  ${outline()};
  box-shadow: ${colors.shadowActive};
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
  width: 100%;
  padding: ${spacing.regular};
  border: 1px solid ${colors.grayLighter};
`

// GraphQL

const createLessonMutation = gql`
  mutation CreateLesson(
    $name: String!
    $description: String!
    $schedule: DateTime
    $premium: Boolean
    $thumbnail: Upload
    $files: [Upload!]!
    $course: CourseInput
  ) {
    lesson: createLesson(
      name: $name
      description: $description
      schedule: $schedule
      premium: $premium
      thumbnail: $thumbnail
      files: $files
      course: $course
    ) {
      id
      name
      description
      thumbnail {
        id
        url
      }
      schedule
      premium
      # course {
      #   id
      #   name
      # }
      streamKey
      streamId
    }
  }
`

// Lesson Form

class LessonForm extends React.Component {
  state = {
    name: '',
    description: '',
    schedule: null,
    premium: false,
    thumbnail: null,
    files: [],
    course: null,
  }

  static async getInitialProps(ctx) {
    return {}
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

  handleScheduleChange = date => {
    this.setState({
      schedule: date,
    })
  }

  handlePremiumToggle = () => {
    this.setState(({ premium }) => ({
      premium: !premium,
    }))
  }

  handleThumbnailChange = thumbnail => {
    this.setState({
      thumbnail,
    })
  }

  handleFilesChange = files => {
    this.setState({
      files: [...this.state.files, ...files],
    })
  }

  handleFileRemove = filename => {
    this.setState({
      files: this.state.files.filter(file => file.name !== filename),
    })
  }

  handleCourseChange = courseInput => {
    this.setState({
      course: courseInput,
    })
  }

  handleSubmit = create => e => {
    e.preventDefault()
    create()
    this.setState({ files: [] })
  }

  render() {
    return (
      <>
        <Navbar activePage="profile" />
        <SideNav activeSection="lessons">
          <Mutation
            mutation={createLessonMutation}
            variables={{
              name: this.state.name,
              description: this.state.description,
              schedule: this.state.schedule,
              premium: this.state.premium,
              thumbnail: this.state.thumbnail,
              files: this.state.files,
              // course: this.state.course,
            }}
          >
            {(create, { loading, error, data }) => {
              if (data) {
                return (
                  <CardCol>
                    <Card>
                      <IconHeader src={iconCheck} value="Lesson Created!" />
                      <CardBody>
                        <CardTitleLink
                          href={{
                            pathname: `/profile/lessons/lesson/`,
                            query: { lessonId: data.lesson.id },
                          }}
                          as={`/profile/lessons/lesson/${data.lesson.id}`}
                          color="secondary"
                          weight="bold"
                        >
                          {data.lesson.name}
                        </CardTitleLink>
                        <CardText>{data.lesson.description}</CardText>
                        <CardFooter>
                          <LiveLink
                            href={`/profile/lessons/lesson/${data.lesson.id}`}
                          >
                            <Button color="primary">
                              <Icon src={iconVideoWhite} inline />
                              View Lesson
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
                    <Breadcrumb href="/profile/lessons">
                      Back to Lessons
                    </Breadcrumb>
                    <NewLessonHeader src={iconVideo} value="Create New Lesson">
                      <SaveButton
                        color="primary"
                        status={{ loading, error, data }}
                        onClick={this.handleSubmit(create)}
                      >
                        Save Lesson
                      </SaveButton>
                    </NewLessonHeader>
                    <NewLessonForm onSubmit={this.handleSubmit(create)}>
                      <NewLessonFormRow>
                        <NewLessonFormCol>
                          <Label>
                            Lesson Name
                            <Input
                              type="text"
                              onChange={this.handleNameChange}
                              value={this.state.name}
                            />
                          </Label>
                          <Label size="regular">
                            Lesson Date & Time{' '}
                            <DatePicker
                              showTimeSelect
                              name="schedule"
                              type="date"
                              dateFormat="M/D/YY – h:mma"
                              timeFormat="h:mma"
                              customInput={
                                <InputWrapper
                                  render={props => (
                                    <Input
                                      {...props}
                                      innerRef={props.ref}
                                      type="button"
                                    />
                                  )}
                                />
                              }
                              selected={this.state.schedule}
                              onChange={this.handleScheduleChange}
                            />
                          </Label>
                          <Label>
                            Lesson Description
                            <Textarea
                              value={this.state.description}
                              onChange={this.handleDescriptionChange}
                              minRows={5}
                            />
                          </Label>
                        </NewLessonFormCol>
                        <FlexCol>
                          <Label size="regular">
                            Lesson Thumbnail
                            <ImagePicker
                              value={this.state.thumbnail}
                              onChange={this.handleThumbnailChange}
                            />
                          </Label>
                          <Label>
                            Lesson Files
                            <FileDropzone onChange={this.handleFilesChange} />
                            {this.state.files.map(file => (
                              <File
                                key={file.name}
                                name={file.name}
                                url={file.preview}
                                onRemove={this.handleFileRemove}
                              />
                            ))}
                          </Label>
                        </FlexCol>
                      </NewLessonFormRow>
                      <FlexRow>
                        <BigSaveButton
                          color="tertiary"
                          status={{ loading, error, data }}
                          type="submit"
                        >
                          Save Lesson
                        </BigSaveButton>
                      </FlexRow>
                    </NewLessonForm>
                  </NewLessonCol>
                )
              }
            }}
          </Mutation>
        </SideNav>
        <Footer />
      </>
    )
  }
}

export default withLogin(LessonForm, { setup: true })
