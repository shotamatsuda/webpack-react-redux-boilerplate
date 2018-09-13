// MIT License
// Copyright (C) 2017-Present Shota Matsuda

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'

import App from './container/App'
import reducer from './reducer'

import './index.scss'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById('root')
)
