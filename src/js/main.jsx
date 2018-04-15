// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

import 'babel-polyfill'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './container/App'
import reducer from './reducer'

import '../css/main.styl'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById('root')
)
