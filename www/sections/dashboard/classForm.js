import React from 'react'
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
import { IconHeader } from 'components/IconHeader'
import { Link } from 'components/Link'
import { Button } from 'components/Button'
import { Icon } from 'components/Icon'
import { Label } from 'components/Label'
import { Input } from 'components/Input'
import { Textarea } from 'components/Textarea'

import { shadow, spacing } from 'utils/theme'
import iconCheck from 'static/assets/icons/ui/check.svg'
import iconVideoWhite from 'static/assets/icons/ui/video-white.svg'
import iconVideo from 'static/assets/icons/ui/video.svg'

const NewClassCol = styled(FlexCol)`
  margin: ${spacing.medium};
`
const NewClassHeader = styled(IconHeader)`
  margin-bottom: ${spacing.regular};
`
const SaveButton = styled(Button)`
  margin-left: auto;
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
      picture: picture[0].preview,
    })
  }

  handlePictureRemove = () => {
    this.setState({
      picture: null,
    })
  }

  handleVideoChange = video => {
    this.setState({
      video: video[0].preview,
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
                  <IconHeader inline src={iconCheck} value="Class Created!" />
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
                        href={`/class/${data.createClass.id}`}
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
              <NewClassCol>
                <NewClassHeader src={iconVideo} value="Create New Class">
                  <SaveButton color="primary" onClick={create}>
                    Save Class
                  </SaveButton>
                </NewClassHeader>
                <form>
                  <Label size="large">
                    Class Name
                    <Input
                      type="text"
                      onChange={this.handleNameChange}
                      value={this.state.name}
                    />
                  </Label>
                  <Label size="large">
                    Class Description
                    <Textarea
                      onChange={this.handleDescriptionChange}
                      value={this.state.description}
                    />
                  </Label>
                  <Label size="medium">
                    Class Date & Time
                    <Calendar
                      onChange={this.handleScheduleChange}
                      value={this.state.schedule}
                    />
                  </Label>
                  <Label size="medium">
                    Class Cover Picture
                    <ImagePicker
                      value={this.state.picture}
                      onChange={this.handlePictureChange}
                      onRemove={this.handlePictureRemove}
                    />
                  </Label>
                  <Label size="large">
                    Class Video
                    <VideoPicker
                      value={this.state.video}
                      onChange={this.handleVideoChange}
                      onRemove={this.handleVideoRemove}
                    />
                  </Label>
                  <Label size="medium">
                    Class Files
                    <FilePicker
                      value={this.state.files}
                      onChange={this.handleFilesChange}
                      onRemove={() => {}}
                    />
                  </Label>
                  <Label size="small">
                    Class Price
                    <Input
                      type="number"
                      onChange={this.handlePriceChange}
                      value={this.state.price}
                    />
                  </Label>
                </form>
              </NewClassCol>
            )
          }
        }}
      </Mutation>
    )
  }
}

export const ClassForm = withRouter(_ClassForm)
