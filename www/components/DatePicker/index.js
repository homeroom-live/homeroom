import React from 'react'
import styled from 'styled-components'
import _DatePicker from 'react-datepicker'

// Styles

import 'react-datepicker/dist/react-datepicker.css'
import './index.css'

// Elements

export const DatePicker = styled(_DatePicker)`
  cursor: pointer;
`

export class InputWrapper extends React.Component {
  render() {
    return this.props.render(this.props)
  }
}
