import '@material/react-linear-progress/dist/linear-progress.css'

import React, { Component } from 'react'

import LinearProgress from '@material/react-linear-progress'

class Loading extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     text: 'Loading'
  //   }
  // }
  // componentDidMount() {
  //   const stopper = this.state.text + '...'
  //   this.interval = window.setInterval(() => {
  //     this.state.text === stopper
  //       ? this.setState(() => ({
  //           text: 'Loading'
  //         }))
  //       : this.setState(prevState => ({
  //           text: prevState.text + '.'
  //         }))
  //   }, 300)
  // }
  // componentWillUnmount() {
  //   window.clearInterval(this.interval)
  // }
  render() {
    return <LinearProgress indeterminate={true} />
  }
}

export default Loading
