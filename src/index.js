import 'normalize.css'
import './index.css'

import App from './components/App'
import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Roboto:300,400,700', 'Material Icons', 'sans-serif']
  }
})

ReactDOM.render(<App />, document.getElementById('root'))
