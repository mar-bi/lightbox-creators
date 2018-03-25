import React from 'react'
import PropTypes from 'prop-types'

const ImageGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.image} className="column is-4" dir="rtl">
        <div className="content grid-img-container">
          <img src={item.image} alt="project-photo" className="grid-img"/>
          <p className="has-text-centered">{item.text}</p>
        </div>
      </div>
    ))}
  </div>
)

export default ImageGrid

ImageGrid.propTypes = {
  gridItems: PropTypes.array
}