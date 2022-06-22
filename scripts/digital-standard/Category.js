import React from 'react'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------
Category.propTypes = {
  children: PropTypes.node
}

export default function Category({ children }) {
  return (
    <>
      <h1>Category</h1>
    </>
  )
}
