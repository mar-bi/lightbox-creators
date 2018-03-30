import React from 'react'
import PropTypes from 'prop-types'
import ImageModal from './ImageModal'

const Projects = ({ items }) => { 
  const showImage = (e) => {
    const targetId = e.target.id.substring(3)
    const modalId = `mod${targetId}`
    const modal = document.getElementById(modalId)
    modal.classList.add('is-active')
  }

  return (
    <article>
      {items.map((item, index) => (
        <div key={`proj-${index}`} className="box article-bcg">
          <div className="columns">
            <div className="column is-8-desktop">
              <div className="content is-large" dir="rtl">
                <h2 className="is-size-3 has-text-weight-semibold has-text-danger">
                  {item.heading}
                </h2>
                <p>{item.description}</p>
              </div>
            </div>
          </div>

          <div className="columns is-multiline">
            {item.images.map((elem, i) => (
              <div
                key={`proj-${index}-img-${i}`}
                className="column is-4-desktop is-6-tablet"
              >
                <div className="content grid-img-container is-16by9">
                  <img
                    id={`img-${index}-${i}`}
                    src={elem.image}
                    alt="project-photo"
                    className="grid-img"
                    onClick={showImage}
                  />
                </div>
                <ImageModal elemId={`mod-${index}-${i}`} image={elem.image}/>
              </div>
            ))}
          </div>
        </div>
      ))}
    </article>
  )
}

export default Projects

Projects.propTypes = {
  items: PropTypes.array,
}
