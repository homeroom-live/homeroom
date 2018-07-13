import React from 'react'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'

// Components

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

import { shadow, spacing, outline } from 'utils/theme'
import iconCheck from 'static/assets/icons/ui/check.svg'
import iconVideoWhite from 'static/assets/icons/ui/video-white.svg'
import iconVideo from 'static/assets/icons/ui/video.svg'

const NewClassCol = styled(FlexCol)`
  margin: ${spacing.medium};
`
const NewClassHeader = styled(IconHeader)`
  ${outline()};
  margin-bottom: ${spacing.regular};
`
const SaveButton = styled(Button)`
  margin-left: auto;
`
const NewClassForm = styled.form`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${spacing.xlarge};
`
const NewClassFormCol = styled(FlexCol)`
  margin-right: ${spacing.xlarge};
`
const ThumbnailCol = styled(FlexCol)`
  flex: 0;
  margin-right: ${spacing.medium};
`
const NewClassMetaRow = styled(FlexRow)`
  align-items: flex-start;
`
const ClassNameLabel = styled(Label)`
  margin-bottom: ${spacing.regular};
`
const ClassPriceLabel = styled(Label)`
  margin-right: ${spacing.regular};
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
    $thumbnail: Upload
    $video: Upload
    $price: Float!
    $schedule: DateTime
    $files: [Upload!]!
  ) {
    createClass(
      classroomId: $classroomId
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

// ClassForm

class _ClassForm extends React.Component {
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
      thumbnail: thumbnail[0],
    })
  }

  handleThumbnailRemove = e => {
    this.setState({
      thumbnail: null,
    })
  }

  handleVideoChange = video => {
    this.setState({
      video: video[0],
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
                  <IconHeader src={iconCheck} value="Class Created!" />
                  <CardBody>
                    <CardTitleLink
                      href={`/dashboard/classes/class/${data.createClass.id}`}
                      color="secondary"
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
                        href={`/dashboard/classes/class/${data.createClass.id}`}
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
                <Breadcrumb
                  href={`/dashboard/classrooms/classroom/${
                    this.props.router.query.classroomId
                  }`}
                >
                  Back to Classroom
                </Breadcrumb>
                <NewClassHeader src={iconVideo} value="Create New Class">
                  <SaveButton color="primary" onClick={create}>
                    Save Class
                  </SaveButton>
                </NewClassHeader>
                <NewClassForm onSubmit={create}>
                  <NewClassFormCol>
                    <NewClassMetaRow>
                      <ThumbnailCol>
                        <Label size="regular">
                          Class Thumbnail
                          <ImagePicker
                            value={this.state.thumbnail}
                            onChange={this.handleThumbnailChange}
                            onRemove={this.handleThumbnailRemove}
                          />
                        </Label>
                      </ThumbnailCol>
                      <FlexCol>
                        <ClassNameLabel>
                          Class Name
                          <Input
                            type="text"
                            onChange={this.handleNameChange}
                            value={this.state.name}
                          />
                        </ClassNameLabel>
                        <FlexRow>
                          <ClassPriceLabel size="small">
                            Class Price
                            <Input
                              type="number"
                              onChange={this.handlePriceChange}
                              value={this.state.price}
                            />
                          </ClassPriceLabel>
                          <Label>
                            Class Date & Time{' '}
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
                        </FlexRow>
                      </FlexCol>
                    </NewClassMetaRow>
                    <Label>
                      Class Description
                      <Textarea
                        onChange={this.handleDescriptionChange}
                        value={this.state.description}
                      />
                    </Label>
                    <Button color="primary" type="submit">
                      Save Class
                    </Button>
                  </NewClassFormCol>
                  <FlexCol>
                    <Label>
                      Class Video
                      <VideoPicker
                        value={this.state.video}
                        onChange={this.handleVideoChange}
                        onRemove={this.handleVideoRemove}
                      />
                    </Label>
                    <Label>
                      Class Files
                      <FilePicker
                        value={this.state.files}
                        onChange={this.handleFilesChange}
                        onRemove={() => {}}
                      />
                    </Label>
                  </FlexCol>
                </NewClassForm>
              </NewClassCol>
            )
          }
        }}
      </Mutation>
    )
  }
}

export const ClassForm = withRouter(_ClassForm)
