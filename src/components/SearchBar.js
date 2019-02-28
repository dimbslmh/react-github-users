import '@material/react-material-icon/dist/material-icon.css'
import '@material/react-text-field/dist/text-field.css'
import '@material/react-ripple/dist/ripple.css'
import './SearchBar.css'

import React, { Component, Fragment } from 'react'
import TextField, { Input } from '@material/react-text-field'

import MaterialIcon from '@material/react-material-icon'
import { withRouter } from 'react-router-dom'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let keyword = this.state.value
    this.props.history.push(`/search?q=${keyword}`)
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <TextField
            trailingIcon={
              <MaterialIcon role="button" icon="search" aria-label="Search" />
            }
          >
            <Input
              value={this.state.value}
              onChange={e => this.setState({ value: e.currentTarget.value })}
            />
          </TextField>
        </form>
      </Fragment>
    )
  }
}

export default withRouter(SearchBar)
