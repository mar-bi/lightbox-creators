import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


const Tags = ({ pathContext, data }) => {
  const { tag } = pathContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with '${tag}'`

  return (
    <section 
      className="section"
      style={{ marginTop: '2rem'}}
    >
      <Helmet title={`الأخبار | ${tag}`} />
      <div className="container content is-large">
        <div className="columns">
          <div className="column is-10 is-offset-1" dir="rtl">
            <h2
              className="title is-size-2 has-text-weight-bold is-bold-light"
              dir="rtl"
            >
              {tagHeader}
            </h2>

            <ul>
              {edges.map(({ node }) => {
                const { title } = node.frontmatter
                const { slug } = node.fields
                return (
                  <li key={slug} className="is-size-3">
                    <Link to={slug}>{title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

Tags.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`