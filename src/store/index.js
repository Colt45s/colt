/* @flow */

import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import type { Store } from '../types'

export const history = createHistory()
const router = routerMiddleware(history)

const getMiddlewares = () => {
  return process.env.NODE_ENV === 'production'
    ? applyMiddleware(router, thunk)
    : applyMiddleware(router, thunk, createLogger())
}

export const store: Store = createStore(reducer, getMiddlewares())
