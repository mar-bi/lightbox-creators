import React from 'react'
import PropTypes from 'prop-types'
import ImageGrid from './ImageGrid'

const Projects = ({ items }) => {
  return (
    <article>
      {items.map((item, index) => (
        <div key={`proj-${index}`} className="box article-bcg">
          <div className="columns">
            <div className="column is-8-desktop">
              <div className="content is-large" dir="rtl">
                <h2 className="is-size-3 has-text-weight-semibold has-text-danger">
                  {item.title}
                </h2>
                {/* <p>{item.description}</p> */}
              </div>
            </div>
          </div>
          <ImageGrid gridItems={item.images || []} />
        </div>
      ))}
    </article>
  )
}

export default Projects

Projects.propTypes = {
  items: PropTypes.array,
}
