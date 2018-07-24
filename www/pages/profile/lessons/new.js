import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'

// Components

import { Navbar } from 'components/Navbar'
import { SideNav } from 'components/SideNav'
import { FilePicker } from 'components/FilePicker'
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
import { Footer } from 'components/Footer'

// Icons

import iconCheck from 'static/assets/icons/ui/check.svg'
import iconVideoWhite from 'static/assets/icons/ui/video-white.svg'
import iconVideo from 'static/assets/icons/ui/video.svg'

// HOCs

import { withLogin } from 'hocs/withLogin'
import { withSetup } from 'hocs/withSetup'

// Utils

import { shadow, spacing, outline, colors } from 'utils/theme'

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
`
const NewLessonFormCol = styled(FlexCol)`
  margin-right: ${spacing.xlarge};
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

const createLessonMutation = gql`
  mutation CreateLesson(
    $name: String!
    $description: String!
    $schedule: DateTime
    $premium: Boolean
    $files: [Upload!]!
    $course: CourseInput
  ) {
    lesson: createLesson(
      name: $name
      description: $description
      schedule: $schedule
      premium: $premium
      files: $files
      course: $course
    ) {
      id
      name
      description
      thumbnail
      schedule
      premium
      course {
        id
        name
      }
      streamKey
      streamURL
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

  handleFilesChange = files => {
    this.setState({
      files,
    })
  }

  handleCourseChange = courseInput => {
    this.setState({
      course: courseInput,
    })
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
              files: this.state.files,
              course: this.state.course,
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
                          <Link
                            href={{
                              pathname: `/profile/lessons/lesson/`,
                              query: { lessonId: data.lesson.id },
                            }}
                            as={`/profile/lessons/lesson/${data.lesson.id}`}
                            textDecoration="none"
                          >
                            <Button color="secondary">Preview Lesson</Button>
                          </Link>
                          <LiveLink
                            href={`/profile/lessons/lesson/${data.lesson.id}`}
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
                    <Breadcrumb href="/profile/lessons">
                      Back to Lessons
                    </Breadcrumb>
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
                          Lesson Files
                          <FilePicker
                            value={this.state.files}
                            onChange={this.handleFilesChange}
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
        </SideNav>
        <Footer />
      </>
    )
  }
}

export default withLogin(withSetup(LessonForm))
