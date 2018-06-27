import React, { Fragment } from 'react'
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

// ClassForm

export class ClassForm extends React.Component {
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
      <Mutation mutation={createClassroom}>
        {(submit, { loading, error, data }) => {
          if (loading) {
            return <Loading />
          } else if (error) {
            return 'something went wrong'
          } else if (data) {
            return 'success!'
          } else {
            return <Fragment>This will be the long form</Fragment>
          }
        }}
      </Mutation>
    )
  }
}
