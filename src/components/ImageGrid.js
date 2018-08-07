import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import ImageModal from './ImageModal'

const ImageGrid = ({ gridItems }) => {
  const showImage = e => {
    const targetId = e.target.parentNode.parentNode.parentNode.id
    const modalId = `mod-${targetId}`
    const modal = document.getElementById(modalId)
    modal.classList.add('is-active')
  }

  return (
    <div className="columns is-multiline">
      {gridItems.map(item => (
        <div
          key={item.image.childImageSharp.sizes.src}
          className="column is-3-desktop is-6-tablet"
          dir="rtl"
        >
          <div className="content grid-img-container">
            <div id={item.image.childImageSharp.sizes.src} onClick={showImage}>
              <Img
                alt=""
                sizes={item.image.childImageSharp.sizes}
                className="grid-img"
              />
            </div>
            {/* <p className="has-text-centered grid-img-caption">{item.text}</p> */}
            <ImageModal
              elemId={`mod-${item.image.childImageSharp.sizes.src}`}
              image={item}
            />
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
