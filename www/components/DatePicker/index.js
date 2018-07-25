import React from 'react'

import DatePickerComponent from 'react-datepicker'
import styled from 'styled-components'

const DatePickerWrapper = styled.span`
  .react-datepicker {
    font-family: 'SofiaPro', sans-serif;
    cursor: pointer;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list,
  .react-datepicker__time-box,
  .react-datepicker__time-container,
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box {
    padding-left: unset;
    padding-right: unset;
    width: 100px;
  }

  .react-datepicker__input-container,
  .react-datepicker-wrapper,
  .react-datepicker-wrapper input {
    width: 100%;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__header {
    background: #f1f1f1;
  }

  .react-datepicker__day--selected:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--in-range:hover,
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected,
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected:hover,
  .react-datepicker__day--keyboard-selected {
    background: #70bf8e;
  }

  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 110px;
  }
`

export const DatePicker = () => (
  <DatePickerWrapper>
    <DatePickerComponent />
  </DatePickerWrapper>
)
