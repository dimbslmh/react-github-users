import '@material/react-top-app-bar/dist/top-app-bar.css'
import '@material/react-layout-grid/dist/layout-grid.css'

import { Cell, Grid, Row } from '@material/react-layout-grid'
import React, { Component, Fragment } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import TopAppBar, { TopAppBarFixedAdjust } from '@material/react-top-app-bar'

import Home from './Home'
import SearchBar from './SearchBar'
import UserList from './UserList'
import UserProfile from './UserProfile'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <TopAppBar title="GitHub User Search" actionItems={[<SearchBar />]} />
          <TopAppBarFixedAdjust>
            <Grid>
              <Row>
                <Cell desktopColumns={3} tabletColumns={2} />
                <Cell desktopColumns={6} tabletColumns={8}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/search" component={UserList} />
                    <Route path="/:username" component={UserProfile} />
                  </Switch>
                </Cell>
                <Cell desktopColumns={3} tabletColumns={2} />
              </Row>
            </Grid>
          </TopAppBarFixedAdjust>
        </Fragment>
      </Router>
    )
  }
}

export default App
