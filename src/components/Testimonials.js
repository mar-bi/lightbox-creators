import React from 'react'
import PropTypes from 'prop-types'

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map((testimonial, index) => (
      <article className="message" key={`test-${index}`} dir="rtl">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)

export default Testimonials

Testimonials.propTypes = {
  testimonials: PropTypes.array
}