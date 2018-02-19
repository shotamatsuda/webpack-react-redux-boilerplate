// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

function App(props) {
  return (
    <div>{props.message}</div>
  )
}

App.propTypes = {
  message: PropTypes.string,
}

App.defaultProps = {
  message: 'Hello World',
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App)
