import React from 'react'
import styled from 'styled-components'

import { Icon } from 'components/Icon'
import { FlexRow } from 'components/FlexRow'

import { colors, opacity, spacing } from 'utils/theme'
import iconCheckGreen from 'static/assets/icons/ui/check-green.svg'
import iconXCircle from 'static/assets/icons/ui/x-circle.svg'

const editingStyles = () => `
  border-bottom: 3px dashed ${colors.secondary};
`
const EditableContainer = styled.span`
  position: relative;
  outline: none;
  margin-bottom: ${spacing.small};
  border-bottom: 3px solid transparent;
  &:hover {
    ${editingStyles()};
  }
  ${props => (props.editing ? editingStyles() : null)};
`
const EditableActions = styled(FlexRow)`
  align-items: flex-end;
  position: absolute;
  top: -30px;
  right: 0;
  z-index: 10;
  width: initial;
`
const EditableIcon = styled(Icon)`
  display: ${props => (props.editing ? 'block' : 'none')};
  margin-left: ${spacing.xsmall};
  opacity: ${opacity};
  &:hover {
    opacity: 1;
  }
`

export const withEditable = ComposedComponent =>
  class WithEditable extends React.Component {
    state = {
      editing: false,
    }

    toggleEdit = e => {
      if (!this.state.editing) {
        this.edit()
      }
    }

    edit = () => {
      this.setState(
        {
          editing: true,
        },
        () => {
          this.domElm.focus()
        },
      )
    }

    save = () => {
      this.setState({
        editing: false,
      })
    }

    cancel = () => {
      this.setState({
        editing: false,
      })
    }

    isValueChanged = () => {
      return this.props.value !== this.domElm.textContent
    }

    handleKeyDown = e => {
      const { key } = e
      switch (key) {
        case 'Enter':
        case 'Escape':
          this.save()
          break
      }
    }

    render() {
      return (
        <EditableContainer editing={this.state.editing}>
          <EditableActions>
            <EditableIcon
              src={iconXCircle}
              onClick={this.cancel}
              editing={this.state.editing}
            />
            <EditableIcon
              src={iconCheckGreen}
              onClick={this.save}
              editing={this.state.editing}
            />
          </EditableActions>
          <ComposedComponent
            onClick={this.toggleEdit}
            contentEditable={this.state.editing}
            autoFocus={this.state.editing}
            innerRef={domNode => {
              this.domElm = domNode
            }}
            onBlur={this.save}
            onKeyDown={this.handleKeyDown}
            value={this.props.value}
            suppressContentEditableWarning
          >
            {this.props.value}
          </ComposedComponent>
        </EditableContainer>
      )
    }
  }
