// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

import { connect } from 'react-redux'

import { incrementSync, incrementAsync } from '../actions'
import App from '../component/App'

function mapStateToProps (state, ownProps) {
  return {
    syncCount: state.syncCount,
    asyncRequests: state.asyncRequests,
    asyncCount: state.asyncCount
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSyncButtonClick () {
      dispatch(incrementSync())
    },

    onAsyncButtonClick () {
      dispatch(incrementAsync())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
