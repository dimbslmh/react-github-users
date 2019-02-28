import '@material/react-card/dist/card.css'
import '@material/react-list/dist/list.css'
import '@material/react-button/dist/button.css'

import List, {
  ListItem,
  ListItemGraphic,
  ListItemText
} from '@material/react-list'
import React, { Component } from 'react'

import Avatar from './Avatar'
import Card from '@material/react-card'
import Loading from './Loading'
import { getUser } from '../api'

class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      user: {}
    }
  }

  componentDidMount() {
    const username = this.props.match.params.username
    getUser(username).then(response => {
      const user = response.data
      this.setState({
        loading: false,
        user
      })
    })
  }

  render() {
    const { login, name, bio, avatar_url } = this.state.user
    const isBio = typeof bio === 'string'
    return this.state.loading === true ? (
      <Loading />
    ) : (
      <Card style={{ padding: '20px' }}>
        <List avatarList nonInteractive>
          <ListItem>
            <ListItemGraphic graphic={<Avatar url={avatar_url} />} />
            <ListItemText primaryText={name} secondaryText={login} />
          </ListItem>
        </List>
        {isBio ? <p>{bio}</p> : null}
      </Card>
    )
  }
}

export default UserProfile
