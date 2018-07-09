import React, { Fragment } from 'react'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'

// Components

import { Calendar } from 'components/Calendar'
import { FilePicker } from 'components/FilePicker'
import { ImagePicker } from 'components/ImagePicker'
import { VideoPicker } from 'components/VideoPicker'
import { Loading } from 'components/Loading'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Text } from 'components/Text'
import { Icon } from 'components/Icon'
import { Link } from 'components/Link'
import { Button } from 'components/Button'

import { colors, shadow, spacing } from 'utils/theme'
import iconCheck from 'static/assets/icons/ui/check.svg'
import iconVideoWhite from 'static/assets/icons/ui/video-white.svg'

const CardCol = styled(FlexCol)`
  align-items: center;
  justify-content: flex-start;
  margin: ${spacing.medium};
`
const Card = styled(FlexCol)`
  ${shadow()};
  max-width: 384px;
`
const CardHeader = styled(FlexRow)`
  padding: ${spacing.regular};
  border-bottom: 1px solid ${colors.grayLighter};
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

// GraphQL

const createClass = gql`
  mutation CreateClass(
    $classroomId: ID!
    $name: String!
    $description: String!
    $picture: Upload
    $video: Upload
    $price: Float!
    $schedule: DateTime
    $files: [Upload!]!
  ) {
    createClass(
      classroomId: $classroomId
      name: $name
      description: $description
      picture: $picture
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

// ClassForm

class _ClassForm extends React.Component {
  state = {
    name: '',
    description: '',
    picture: null,
    video: null,
    price: 0,
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

  handlePictureChange = picture => {
    this.setState({
      picture,
    })
  }

  handleVideoChange = video => {
    this.setState({
      video,
    })
  }

  handlePriceChange = e => {
    this.setState({
      price: e.target.value,
    })
  }

  handleScheduleChange = e => {
    this.setState({
      schedule: e.target.value,
    })
  }

  handleFilesChange = files => {
    this.setState({
      files,
    })
  }

  getClassStreamURL = classId => {
    return `/dashboard/classes/class/${classId}`
  }

  render() {
    return (
      <Mutation
        mutation={createClass}
        variables={{
          classroomId: this.props.router.query.classroomId,
          name: this.state.name,
          description: this.state.description,
          picture: this.state.picture,
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
                  <CardHeader>
                    <Icon src={iconCheck} inline />
                    <Text weight="bold" margin="0">
                      Class Created!
                    </Text>
                  </CardHeader>
                  <CardBody>
                    <CardTitleLink
                      href={`/dashboard/classes/class/${data.createClass.id}`}
                      color="secondary"
                      size="large"
                      weight="bold"
                    >
                      {data.createClass.name}
                    </CardTitleLink>
                    <CardText>{data.createClass.description}</CardText>
                    <CardFooter>
                      <Link
                        href={`/class${data.createClass.id}`}
                        textDecoration="none"
                      >
                        <Button color="secondary">Preview Class</Button>
                      </Link>
                      <LiveLink
                        href={`/dashboard/live/class/${data.createClass.id}`}
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
              <Fragment>
                <header>
                  <h2>Create new class</h2>
                </header>
                <form onSubmit={create}>
                  <div>
                    <label>Name of your class:</label>
                    <input
                      type="text"
                      onChange={this.handleNameChange}
                      value={this.state.name}
                    />
                  </div>
                  <div>
                    <label>
                      Tell us, what is the topic you are going to present?
                    </label>
                    <textarea
                      onChange={this.handleDescriptionChange}
                      value={this.state.description}
                    />
                  </div>
                  <div>
                    <label>People love to see the cover photo!</label>
                    <ImagePicker
                      onChange={this.handlePictureChange}
                      value={this.state.picture}
                    />
                  </div>
                  <div>
                    <label>Have you prepared a short intro video?</label>
                    <VideoPicker
                      onChange={this.handlePictureChange}
                      value={this.state.picture}
                    />
                  </div>
                  <div>
                    <label>Will your students need any files?</label>
                    <FilePicker
                      onChange={this.handleFilesChange}
                      value={this.state.files}
                    />
                  </div>
                  <div>
                    <label>Set the price for your class:</label>
                    <input
                      type="number"
                      onChange={this.handlePriceChange}
                      value={this.state.price}
                    />
                  </div>
                  <div>
                    <label>{`When's your class starting?`}</label>
                    <Calendar
                      onChange={this.handleScheduleChange}
                      value={this.state.schedule}
                    />
                  </div>
                  <button type="submit">{`Let's do this!`}</button>
                </form>
              </Fragment>
            )
          }
        }}
      </Mutation>
    )
  }
}

export const ClassForm = withRouter(_ClassForm)
