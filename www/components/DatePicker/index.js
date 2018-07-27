import React from 'react'
import styled from 'styled-components'

// Components

import DatePickerComponent from 'react-datepicker'

// Styles

import 'react-datepicker/dist/react-datepicker.css'
import './index.css'

// Elements

const DatePickerWrapper = styled.span`
  coursor: pointer;
`

// DatePicker

export class DatePicker extends React.Component {
  state = {}

  render() {
    return (
      <DatePickerWrapper>
        <DatePickerComponent {...this.props} />
      </DatePickerWrapper>
    )
  }
}
