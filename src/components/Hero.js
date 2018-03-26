import React from 'react'
import PropTypes from 'prop-types'

const ArTitle = ({ title }) => (
  <h1 className="title has-text-info is-size-1-widescreen">
    {title || ''}
  </h1>
)

const EnTitle = ({ title }) => (
  <h1 
    className="title has-text-info is-size-1-widescreen en-title"
  >
    {title || ''}
  </h1>
)


const Hero = ({ image, size, title, layer, main }) => (
  <section
    className={`hero is-${size}`}
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    dir="rtl"
  >
    <div className="hero-body">
      <div className="container">
        <div
          className={layer ? 'hero-text-container' : ''}
        >
          {
            main ?
              <EnTitle title={title} /> :
              <ArTitle title={title} />
          }
        </div>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  image: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  layer: PropTypes.bool,
  main: PropTypes.bool
}

ArTitle.propTypes = {
  title: PropTypes.string
}

EnTitle.propTypes = {
  title: PropTypes.string
}
export default Hero
