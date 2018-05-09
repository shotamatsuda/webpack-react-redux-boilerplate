// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

export function incrementSync () {
  return {
    type: 'INCREMENT_SYNC'
  }
}

export function incrementAsync () {
  return dispatch => {
    dispatch({
      type: 'BEGIN_INCREMENT_ASYNC'
    })
    setTimeout(() => {
      dispatch({
        type: 'END_INCREMENT_ASYNC'
      })
    }, 1000 * Math.random())
  }
}
