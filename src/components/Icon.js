import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ viewbox, size, color, icon }) => (
  <svg
    className="svg-icon"
    viewBox={viewbox}
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
  >
    <path d={icon} fill={color} />
  </svg>
)

export default Icon

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  viewbox: PropTypes.string,
}

Icon.defaultProps = {
  size: 36,
  viewbox: '0 0 32 32',
  color: '#dcd0c0',
}
