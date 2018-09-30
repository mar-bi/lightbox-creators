import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import ImageGrid from '../components/ImageGrid'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  tags,
  images
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
            <div className="tags">
              {tags.map((elem, index) => (
                <Link
                  key={`elem-${index}`}
                  to={`/tags/${elem}/`}
                  className="tag custom-tag is-warning is-size-5 is-link"
                >
                  {elem}
                </Link>
              ))}
            </div>
            <ImageGrid gridItems={images || []} />
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
      helmet={<Helmet title={`الأخبار | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
      tags={post.frontmatter.tags}
      images={post.frontmatter.images}
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
        tags
        images {
          image {
            childImageSharp {
              sizes(maxWidth: 630) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`

BlogPostTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
  tags: PropTypes.array,
  images: PropTypes.array,
}
