import React, { Fragment } from 'react'
import Link from 'next/link'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

// Components

import { Loading } from '../../components/Loading'

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
    price: 0,
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

  handlePriceChange = e => {
    this.setState({
      price: e.target.value,
    })
  }

  render() {
    return (
      <Mutation
        mutation={createClassroom}
        variables={{
          name: this.state.name,
          description: this.state.description,
          price: this.state.price,
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
              <Fragment>
                <header>
                  <h2>New Classroom</h2>
                </header>
                <form onSubmit={create}>
                  <div>
                    <label>{`What's the name of your classroom?`}</label>
                    <input
                      type="text"
                      onChange={this.handleNameChange}
                      value={this.state.name}
                    />
                  </div>
                  <div>
                    <label>In this classroom I will be talking about...?</label>
                    <textarea
                      onChange={this.handleDescriptionChange}
                      value={this.state.description}
                    />
                  </div>
                  <div>
                    <label>{`Set your subscription fee:`}</label>
                    <input
                      type="number"
                      onChange={this.handlePriceChange}
                      value={this.state.price}
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
