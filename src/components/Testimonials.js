import React from 'react'
import PropTypes from 'prop-types'

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map((testimonial, index) => (
      <article className="message" key={`test-${index}`} dir="rtl">
        <div className="message-body">
          <p className="is-size-4">{testimonial.quote}</p>
          <cite className="has-text-weight-bold is-size-4"> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)

export default Testimonials

Testimonials.propTypes = {
  testimonials: PropTypes.array
}