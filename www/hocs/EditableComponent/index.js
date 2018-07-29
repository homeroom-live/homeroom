import React from 'react'
import { Mutation } from 'react-apollo'

export const STATUS = {
  NOT_CHANGED: 'STATUS_NOT_CHANGED',
  SUCCESS: 'STATUS_SUCCESS',
  ERROR: 'STATUS_ERROR',
  LOADING: 'STATUS_LOADING',
}

function getStatusFromLED({ loading, error, data }) {
  if (loading) {
    return STATUS.LOADING
  } else if (error) {
    return STATUS.ERROR
  } else if (data) {
    return STATUS.SUCCESS
  } else {
    return STATUS.NOT_CHANGED
  }
}

export class EditableComponent extends React.Component {
  state = {
    data: this.props.value,
  }

  handleChange = data => {
    this.setState({ data })
  }

  render() {
    return (
      <Mutation
        mutation={this.props.mutation}
        variables={{
          ...this.props.variables,
          data: this.state.data,
        }}
      >
        {(submit, { loading, error, data }) =>
          this.props.children({
            status: getStatusFromLED({ loading, error, data }),
            onChange: this.handleChange,
            onSubmit: submit,
            value: this.state.data,
          })
        }
      </Mutation>
    )
  }
}
