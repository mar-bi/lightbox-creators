import React from 'react'
import PropTypes from 'prop-types'

const Projects = ({ items }) => (
  <article>
    {items.map((item, index) => (
      <div key={`proj-${index}`} className="article-bcg">
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
              <div className="content grid-img-container">
                <img
                  src={elem.image}
                  alt="project-photo"
                  className="grid-img"
                />
                <p className="has-text-centered">{elem.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </article>
)

export default Projects

Projects.propTypes = {
  items: PropTypes.array,
}
