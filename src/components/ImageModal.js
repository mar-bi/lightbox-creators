import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const ImageModal = ({ elemId, image }) => {
  const closeModal = () => {
    const modal = document.getElementById(elemId)
    modal.classList.remove('is-active')
  }

  return (
    <div id={elemId} className="modal">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-content">
        <div className="image">
          <Img
            alt=""
            sizes={image.image.childImageSharp.sizes}
            className="modal-img"
          />
        </div>
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
  image: PropTypes.object,
  elemId: PropTypes.string,
}
