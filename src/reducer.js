// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

import { handleActions } from 'redux-actions'

import {
  INCREMENT,
  WILL_INCREMENT,
  DID_INCREMENT
} from './actions'

const initialState = {
  syncCount: 0,
  asyncRequests: 0,
  asyncCount: 0
}

export default handleActions({
  [INCREMENT]: (state, action) => {
    return {
      ...state,
      syncCount: state.syncCount + 1
    }
  },

  [WILL_INCREMENT]: (state, action) => {
    return {
      ...state,
      asyncRequests: state.asyncRequests + 1
    }
  },

  [DID_INCREMENT]: (state, action) => {
    return {
      ...state,
      asyncRequests: state.asyncRequests - 1,
      asyncCount: state.asyncCount + 1
    }
  }
}, initialState)
