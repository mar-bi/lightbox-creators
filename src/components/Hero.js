import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ image, size, title, subtitle, layer }) => (
  <section
    className={`hero is-${size}`}
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="hero-body">
      <div className="container">
        <div className={layer ? 'hero-text-container' : ''}>
          <h1 className="title has-text-info is-size-1-widescreen">
            {title || ''}
          </h1>
          <h2 className="subtitle has-text-warning is-size-3-widescreen">
            {subtitle || ''}
          </h2>
        </div>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  image: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  layer: PropTypes.bool,
}

export default Hero
