// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

import PropTypes from 'prop-types'
import React from 'react'

export default function App (props) {
  return (
    <div>
      <div>
        <h3>Sync Action</h3>
        <button onClick={props.onSyncButtonClick}>
          Dispatch
        </button> {props.syncCount}
      </div>
      <div>
        <h3>Async Action</h3>
        <button onClick={props.onAsyncButtonClick}>
          Dispatch
        </button> {props.asyncCount} / {props.asyncRequests}
      </div>
    </div>
  )
}

App.propTypes = {
  syncCount: PropTypes.number,
  asyncRequests: PropTypes.number,
  asyncCount: PropTypes.number,
  onSyncButtonClick: PropTypes.func,
  onAsyncButtonClick: PropTypes.func
}

App.defaultProps = {
  syncCount: 0,
  asyncRequests: 0,
  asyncCount: 0,
  onSyncButtonClick: null,
  onAsyncButtonClick: null
}
