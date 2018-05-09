// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import * as actions from '../actions'

class App extends PureComponent {
  constructor (props) {
    super(props)
    this.onSyncButtonClick = this.onSyncButtonClick.bind(this)
    this.onAsyncButtonClick = this.onAsyncButtonClick.bind(this)
  }

  onSyncButtonClick (event) {
    this.props.incrementSync()
  }

  onAsyncButtonClick (event) {
    this.props.incrementAsync()
  }

  render () {
    return (
      <div>
        <div>
          <h3>Sync Action</h3>
          <button onClick={this.onSyncButtonClick}>
            Dispatch
          </button> {this.props.syncCount}
        </div>
        <div>
          <h3>Async Action</h3>
          <button onClick={this.onAsyncButtonClick}>
            Dispatch
          </button> {this.props.asyncCount} / {this.props.asyncRequests}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  syncCount: PropTypes.number.isRequired,
  asyncRequests: PropTypes.number.isRequired,
  asyncCount: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  return {
    ...state,
  }
}

export default connect(mapStateToProps, actions)(App)
