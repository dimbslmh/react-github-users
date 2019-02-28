import '@material/react-card/dist/card.css'
import '@material/react-list/dist/list.css'

import List, {
  ListItem,
  ListItemGraphic,
  ListItemText
} from '@material/react-list'
import React, { Component, Fragment } from 'react'

import Avatar from './Avatar'
import Card from '@material/react-card'
import Loading from './Loading'
import Pluralize from 'react-pluralize'
import { getUsers } from './../api/index'
import queryString from 'query-string'
import { withRouter } from 'react-router-dom'

class UserList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      items: null
    }

    this.handleSelectUser = this.handleSelectUser.bind(this)
    this.fetchUsers = this.fetchUsers.bind(this)
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    this.fetchUsers(values.q)
  }

  componentDidUpdate(prevProps) {
    const values = queryString.parse(this.props.location.search)
    const prevValues = queryString.parse(prevProps.location.search)
    if (prevValues.q !== values.q) {
      this.fetchUsers(values.q)
    }
  }

  fetchUsers(query) {
    this.setState({
      loading: true
    })
    getUsers(query).then(response => {
      const { items } = response.data
      this.setState({
        loading: false,
        items
      })
    })
  }

  handleSelectUser(event) {
    const login = event.currentTarget.dataset.login
    this.props.history.push(`/${login}`)
  }

  render() {
    const { items, loading } = this.state
    return loading === true ? (
      <Loading />
    ) : (
      <Fragment>
        <p>
          <Pluralize singular={'user'} count={items.length} />
        </p>
        <Card>
          <List avatarList>
            {items.map(({ id, login, avatar_url }) => (
              <ListItem
                key={id}
                tag="a"
                onClick={this.handleSelectUser}
                data-login={login}
              >
                <ListItemGraphic graphic={<Avatar url={avatar_url} />} />
                <ListItemText primaryText={login} />
              </ListItem>
            ))}
          </List>
        </Card>
      </Fragment>
    )
  }
}

export default withRouter(UserList)
