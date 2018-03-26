import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content is-large">
        <div className="columns">
          <div className="column is-10 is-offset-1" dir="rtl">
            <h2
              className="title is-size-2 has-text-weight-bold is-bold-light"
              dir="rtl"
            >
              {title}
            </h2>
            <p dir="rtl">{description}</p>
            <PostContent className="user-content" content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default props => {
  const { markdownRemark: post } = props.data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`الأخبار | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
    />
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`

BlogPostTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}
