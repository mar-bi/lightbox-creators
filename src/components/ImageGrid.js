import React from 'react'
import PropTypes from 'prop-types'
import ImageModal from './ImageModal'

const ImageGrid = ({ gridItems }) => {
  const showImage = e => {
    const targetId = e.target.id
    const modalId = `mdl-${targetId}`
    const modal = document.getElementById(modalId)
    modal.classList.add('is-active')
  }
  const items = gridItems.sort((a, b) => {
    if (a.image < b.image) {
      return -1
    } else if (a.image > b.image) {
      return 1
    } else {
      return 0
    }
  })

  return (
    <div className="columns is-multiline">
      {items.map(item => (
        <div
          key={item.image}
          className="column is-3-desktop is-6-tablet"
          dir="rtl"
        >
          <div className="content grid-img-container">
            <img
              id={item.image}
              src={item.image}
              alt={item.text}
              className="grid-img"
              onClick={showImage}
            />
            <p className="has-text-centered grid-img-caption">{item.text}</p>
            <ImageModal elemId={`mdl-${item.image}`} image={item.image} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImageGrid

ImageGrid.propTypes = {
  gridItems: PropTypes.array,
}
