import React from 'react'
import PropTypes from 'prop-types'

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

Content.propTypes = {
  content: PropTypes.func,
  className: PropTypes.string,
}

HTMLContent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
}

export default Content
