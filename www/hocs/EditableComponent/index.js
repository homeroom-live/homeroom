import React from 'react'
import { Mutation } from 'react-apollo'

export class EditableComponent extends React.Component {
  state = {
    data: this.props.value,
  }

  handleChange = data => {
    this.setState({ data })
  }

  handleSubmit = submit => e => {
    if (e && e.preventDefault) {
      e.preventDefault()
    }
    submit()
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
            status: { loading, error, data },
            onChange: this.handleChange,
            onSubmit: this.handleSubmit(submit),
            value: this.state.data,
          })
        }
      </Mutation>
    )
  }
}
