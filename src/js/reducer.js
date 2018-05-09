// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

import {} from './actions'

const initialState = {
  syncCount: 0,
  asyncRequests: 0,
  asyncCount: 0,
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_SYNC':
      return {
        ...state,
        syncCount: state.syncCount + 1,
      }
    case 'BEGIN_INCREMENT_ASYNC':
      return {
        ...state,
        asyncRequests: state.asyncRequests + 1,
      }
    case 'END_INCREMENT_ASYNC':
      return {
        ...state,
        asyncRequests: state.asyncRequests - 1,
        asyncCount: state.asyncCount + 1,
      }
    default:
      break
  }
  return state
}
