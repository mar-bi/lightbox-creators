import React from 'react'
import PropTypes from 'prop-types'
import ImageModal from './ImageModal'

const ImageGrid = ({ gridItems }) => { 
  const showImage = (e) => {
    const targetId = e.target.id
    const modalId = `mdl-${targetId}`
    const modal = document.getElementById(modalId)
    modal.classList.add('is-active')
  }

  return (
    <div className="columns is-multiline">
      {gridItems.map(item => (
        <div
          key={item.image}
          className="column is-3-desktop is-6-tablet"
          dir="rtl"
        >
          <div className="content grid-img-container">
            <img
              id={item.image} 
              src={item.image} 
              alt="project-photo" 
              className="grid-img"
              onClick={showImage} 
            />
            <p className="has-text-centered">{item.text}</p>
            <ImageModal elemId={`mdl-${item.image}`} image={item.image}/>
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
