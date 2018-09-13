// MIT License
// Copyright (C) 2017-Present Shota Matsuda

export const INCREMENT = 'INCREMENT'
export const WILL_INCREMENT = 'WILL_INCREMENT'
export const DID_INCREMENT = 'DID_INCREMENT'

export function incrementSync () {
  return {
    type: INCREMENT
  }
}

export function incrementAsync () {
  return async dispatch => {
    dispatch({
      type: WILL_INCREMENT
    })
    const delay = 1000 * Math.random()
    await new Promise(resolve => setTimeout(resolve, delay))
    dispatch({
      type: DID_INCREMENT
    })
  }
}
