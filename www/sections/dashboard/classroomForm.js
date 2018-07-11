import React, { Fragment } from 'react'
import Link from 'next/link'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'

// Components

import { Loading } from 'components/Loading'
import { IconHeader } from 'components/IconHeader'
import { FlexCol } from 'components/FlexCol'
import { Button } from 'components/Button'
import { Breadcrumb } from 'components/Breadcrumb'
import { VideoPicker } from 'components/VideoPicker'
import { Label } from 'components/Label'
import { Input } from 'components/Input'
import { Textarea } from 'components/Textarea'

import { spacing } from 'utils/theme'
import iconHome from 'static/assets/icons/ui/home.svg'

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

const NewClassroomCol = styled(FlexCol)`
  margin: ${spacing.medium};
`
const NewClassroomHeader = styled(IconHeader)`
  margin-bottom: ${spacing.regular};
`
const SaveButton = styled(Button)`
  margin-left: auto;
`

// ClassroomForm

export class ClassroomForm extends React.Component {
  state = {
    name: '',
    description: '',
    video: null,
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
      video: file,
    })
  }

  handleVideoRemove = e => {
    this.setState({
      video: null,
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
        }}
      >
        {(create, { loading, error, data }) => {
          if (loading) {
            return <Loading />
          } else if (error) {
            return 'something went wrong'
          } else if (data) {
            return (
              <Fragment>
                Classroom successfully created!
                <Link
                  href={`/dashboard/classes/new?classroomId=${
                    data.createClassroom.id
                  }`}
                  as={`/dashboard/classes/new/${data.createClassroom.id}`}
                  prefetch
                >
                  <a>Create a new class</a>
                </Link>
              </Fragment>
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
                <form>
                  <Label size="xlarge">
                    Classroom Welcome Video
                    <VideoPicker
                      onChange={this.handleVideoChange}
                      onRemove={this.handleVideoRemove}
                      value={this.state.video}
                    />
                  </Label>
                  <Label size="large">
                    Classroom Name
                    <Input
                      type="text"
                      onChange={this.handleNameChange}
                      value={this.state.name}
                    />
                  </Label>
                  <Label size="large">
                    Classroom Description
                    <Textarea
                      onChange={this.handleDescriptionChange}
                      value={this.state.description}
                    />
                  </Label>
                </form>
              </NewClassroomCol>
            )
          }
        }}
      </Mutation>
    )
  }
}
