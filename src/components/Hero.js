import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ image, size }) => (
  <section className={`hero is-${size}`} style={{ backgroundImage: `url(${image})`}}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title has-text-info">
          Medium title
        </h1>
        <h2 className="subtitle has-text-warning">
          Medium subtitle
        </h2>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  image: PropTypes.string,
  size: PropTypes.string
}

export default Hero