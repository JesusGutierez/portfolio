import React from 'react'
import styles from './index.module.scss'
import PropTypes from 'prop-types'

function Field() {
  return (
    <div>Field</div>
  )
}

Field.propTypes = {
  name: PropTypes.string.isRequired
}

export default Field
