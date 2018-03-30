import React from 'react'
import PropTypes from 'prop-types'

const ImageModal = ({ elemId, image }) => {
  const closeModal = (e) => {
    const modal = e.target.parentNode
    modal.classList.remove('is-active')
  }

  return (
    <div id={elemId} className="modal">
      <div 
        className="modal-background"
        onClick={closeModal}
      />
      <div className="modal-content">
        <p className="image">
          <img src={image} alt="project-image" className="modal-img"/>
        </p>
      </div>
      <button 
        className="modal-close is-large" 
        aria-label="close"
        onClick={closeModal} 
      />
    </div>
  )
}

export default ImageModal

ImageModal.propTypes = {
  image: PropTypes.string,
  elemId: PropTypes.string
}