import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'

// Components

import { Loading } from 'components/Loading'
import { IconHeader } from 'components/IconHeader'
import { FlexCol } from 'components/FlexCol'
import { FlexRow } from 'components/FlexRow'
import { Button } from 'components/Button'
import { Breadcrumb } from 'components/Breadcrumb'
import { VideoPicker } from 'components/VideoPicker'
import { ImagePicker } from 'components/ImagePicker'
import { Label } from 'components/Label'
import { Input } from 'components/Input'
import { Textarea } from 'components/Textarea'
import { Text } from 'components/Text'
import { Link } from 'components/Link'

import { spacing, shadow, outline } from 'utils/theme'
import iconHome from 'static/assets/icons/ui/home.svg'
import iconCheck from 'static/assets/icons/ui/check.svg'

const NewClassroomCol = styled(FlexCol)`
  margin: ${spacing.medium};
`
const NewClassroomForm = styled.form`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${spacing.xlarge};
`
const NewClassroomFormCol = styled(FlexCol)`
  margin-right: ${spacing.xlarge};
`
const NewClassroomHeader = styled(IconHeader)`
  ${outline()};
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

// GraphQL

const createClassroom = gql`
  mutation CreateClassroom(
    $name: String!
    $description: String!
    $price: Float!
  ) {
    createClassroom(name: $name, description: $description, price: $price) {
      id
    }
  }
`

// ClassroomForm

export class ClassroomForm extends React.Component {
  state = {
    name: '',
    description: '',
    video: null,
    image: null,
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

  handleVideoChange = file => {
    this.setState({
      video: file[0].preview,
    })
  }

  handleVideoRemove = e => {
    this.setState({
      video: null,
    })
  }

  handleThumbnailChange = file => {
    this.setState({
      thumbnail: file[0].preview,
    })
  }

  handleThumbnailRemove = e => {
    this.setState({
      thumbnail: null,
    })
  }

  render() {
    return (
      <Mutation
        mutation={createClassroom}
        variables={{
          name: this.state.name,
          description: this.state.description,
          video: this.state.video,
          thumbnail: this.state.thumbnail,
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
                      href={`/dashboard/classrooms/classroom/${
                        data.createClassroom.id
                      }`}
                      color="secondary"
                      size="large"
                      weight="bold"
                    >
                      {data.createClassroom.name}
                    </CardTitleLink>
                    <CardText>{data.createClassroom.description}</CardText>
                    <CardFooter>
                      <Link
                        href={`/classroom/${data.createClassroom.id}`}
                        textDecoration="none"
                      >
                        <Button color="secondary">Preview Classroom</Button>
                      </Link>
                    </CardFooter>
                  </CardBody>
                </Card>
              </CardCol>
            )
          } else {
            return (
              <NewClassroomCol>
                <Breadcrumb href="/dashboard">Back to Classrooms</Breadcrumb>
                <NewClassroomHeader src={iconHome} value="Create New Classroom">
                  <SaveButton color="primary" onClick={create}>
                    Save Classroom
                  </SaveButton>
                </NewClassroomHeader>

                <NewClassroomForm onSubmit={create}>
                  <NewClassroomFormCol>
                    <Label size="regular">
                      Classroom Thumbnail
                      <ImagePicker
                        onChange={this.handleThumbnailChange}
                        onRemove={this.handleThumbnailRemove}
                        value={this.state.thumbnail}
                      />
                    </Label>
                    <Label>
                      Classroom Name
                      <Input
                        type="text"
                        onChange={this.handleNameChange}
                        value={this.state.name}
                      />
                    </Label>
                    <Label>
                      Classroom Description
                      <Textarea
                        onChange={this.handleDescriptionChange}
                        value={this.state.description}
                      />
                    </Label>
                    <Button type="submit" color="primary">
                      Save Classroom
                    </Button>
                  </NewClassroomFormCol>

                  <FlexCol>
                    <Label>
                      Classroom Welcome Video
                      <VideoPicker
                        onChange={this.handleVideoChange}
                        onRemove={this.handleVideoRemove}
                        value={this.state.video}
                      />
                    </Label>
                  </FlexCol>
                </NewClassroomForm>
              </NewClassroomCol>
            )
          }
        }}
      </Mutation>
    )
  }
}
