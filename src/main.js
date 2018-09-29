/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import App from './components/App'
import { store, history } from './store'

const root = document.getElementById('root')

if (!root) {
  throw new Error('not found root')
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  root
)
