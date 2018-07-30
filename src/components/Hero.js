import React from 'react'
import PropTypes from 'prop-types'

const ArTitle = ({ title }) => (
  <h1 className="title has-text-info is-size-1-widescreen hero-title">
    {title || ''}
  </h1>
)

const EnTitle = ({ title }) => (
  <h1 className="title has-text-info is-size-1-widescreen en-title hero-title">
    {title || ''}
  </h1>
)

const Hero = ({ image, size, title, layer, main }) => (
  <section
    className={`hero is-${size} container is-widescreen page-hero`}
    dir="rtl"
  >
    <img
      srcSet={image.srcSet}
      sizes={image.sizes}
      src={image.src}
      alt=""
      className="hero-background"
    />
    <div className={layer ? 'hero-text-container' : ''}>
      {main ? <EnTitle title={title} /> : <ArTitle title={title} />}
    </div>
  </section>
)

Hero.propTypes = {
  image: PropTypes.object,
  size: PropTypes.string,
  title: PropTypes.string,
  layer: PropTypes.bool,
  main: PropTypes.bool,
}

ArTitle.propTypes = {
  title: PropTypes.string,
}

EnTitle.propTypes = {
  title: PropTypes.string,
}

export default Hero
