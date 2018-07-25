import React from 'react'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import styled from 'styled-components'
import moment from 'moment'

// Components

import { Navbar } from 'components/Navbar'
import { SideNav } from 'components/SideNav'
import { FilePicker } from 'components/FilePicker'
import { DatePicker } from 'components/DatePicker'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { IconHeader } from 'components/IconHeader'
import { Button } from 'components/Button'
import { Label } from 'components/Label'
import { Input } from 'components/Input'
import { Textarea } from 'components/Textarea'
import { Breadcrumb } from 'components/Breadcrumb'
import { Footer } from 'components/Footer'

// Icons

import iconVideo from 'static/assets/icons/ui/video.svg'

// HOCs

import { withLogin } from 'hocs/withLogin'

// Utils

import { spacing, outline, colors } from 'utils/theme'
import { NetworkStatus } from '../../../node_modules/apollo-client'

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
const LessonNameLabel = styled(Label)`
  margin-bottom: ${spacing.regular};
`
const BigSaveButton = styled(Button)`
  width: 100%;
  padding: ${spacing.regular};
  border: 1px solid ${colors.grayLighter};
`

// GraphQL

const lessonQuery = gql`
  query lesson($id: ID!) {
    lesson(id: $id) {
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

const updateLessonMutation = gql`
  mutation UpdateLesson(
    $id: ID!
    $name: String!
    $description: String!
    $schedule: DateTime
    $premium: Boolean
    $files: [Upload!]!
    $course: CourseInput
  ) {
    lesson: updateLesson(
      id: $id
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
    name: this.props.name,
    description: this.props.description,
    schedule: this.props.schedule,
    premium: this.props.premium,
    files: this.props.files,
    course: this.props.course,
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
      <Mutation
        mutation={updateLessonMutation}
        variables={{
          id: this.props.id,
          name: this.state.name,
          description: this.state.description,
          schedule: this.state.schedule,
          premium: this.state.premium,
          files: [],
          course: null,
        }}
      >
        {(create, { loading, error, data }) => (
          <NewLessonCol>
            <Breadcrumb href="/profile/lessons">Back to Lessons</Breadcrumb>
            <NewLessonHeader src={iconVideo} value="Create New Lesson">
              <SaveButton color="primary" onClick={create}>
                Save Lesson
              </SaveButton>
            </NewLessonHeader>
            <NewLessonForm onSubmit={create}>
              <NewLessonFormRow>
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
                      timeFormat="h:mma"
                      customInput={<Input type="button" />}
                      selected={this.state.schedule}
                      onChange={this.handleScheduleChange}
                    />
                  </Label>
                  <Label>
                    Lesson Description
                    <Textarea
                      value={this.state.description}
                      onChange={this.handleDescriptionChange}
                      rows={5}
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
              </NewLessonFormRow>
              <FlexRow>
                {loading && 'loading'}
                {error && 'error'}
                <BigSaveButton color="tertiary" type="submit">
                  Save Profile
                </BigSaveButton>
              </FlexRow>
            </NewLessonForm>
          </NewLessonCol>
        )}
      </Mutation>
    )
  }
}

class Lesson extends React.Component {
  static getInitialProps(ctx) {
    const lessonId = ctx.query.lessonId

    return { lessonId }
  }

  render() {
    return (
      <>
        <Navbar activePage="profile" />
        <SideNav activeSection="lessons">
          <Query
            query={lessonQuery}
            variables={{ id: this.props.lessonId }}
            notifyOnNetworkStatusChange
          >
            {({ networkStatus, data }) => {
              switch (networkStatus) {
                case NetworkStatus.ready: {
                  return (
                    <LessonForm
                      id={data.lesson.id}
                      name={data.lesson.name}
                      description={data.lesson.description}
                      schedule={moment(data.lesson.schedule)}
                      premium={data.lesson.premium}
                      files={data.lesson.files}
                      course={data.lesson.course}
                    />
                  )
                }

                default: {
                  return null
                }
              }
            }}
          </Query>
        </SideNav>
        <Footer />
      </>
    )
  }
}

export default withLogin(Lesson, { setup: true })
