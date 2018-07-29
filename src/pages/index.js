import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import kebabCase from 'lodash/kebabCase'
import Hero from '../components/Hero'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts, group } = data.allMarkdownRemark
    const { companyNameEn: company } = data.dataJson
    const rtlDate = dateStr => {
      const unixTime = new Date(dateStr)
      return unixTime.toLocaleDateString('ar-EG')
    }

    return (
      <div>
        <Hero
          image={data.heroImage.sizes}
          size="large"
          title={company}
          layer
          main
        />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <h2 className="has-text-weight-bold is-size-2" dir="rtl">
                    الأخبار
                  </h2>
                </div>
              </div>
            </div>

            <div className="columns is-tablet">
              <div className="column is-3-tablet is-2-widescreen is-offset-1">
                <div
                  className="content box"
                  style={{
                    border: '1px solid #c0b283',
                    borderRadius: '2px',
                    padding: '1.5em',
                    backgroundColor: 'rgba(220,208,192,0.25)',
                  }}
                >
                  <h2 className="is-size-3" dir="rtl">
                    قائمة العلامات
                  </h2>
                  <ul className="tags-list" dir="rtl">
                    {group.map(tag => (
                      <li key={tag.fieldValue} className="is-size-4">
                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                          {tag.fieldValue} ({tag.totalCount})
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="column is-7-tablet is-8-widescreen">
                {posts
                  .filter(
                    post => post.node.frontmatter.templateKey === 'blog-post'
                  )
                  .map(({ node: post }) => (
                    <div
                      className="content box blog-container"
                      style={{
                        border: '1px solid #c0b283',
                        borderRadius: '2px',
                        padding: '2em 4em',
                      }}
                      key={post.id}
                    >
                      <p dir="rtl" className="is-size-3">
                        <Link className="has-text-danger" to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                        <span> &bull; </span>
                        <small className="has-text-dark" dir="rtl">
                          {rtlDate(post.frontmatter.date)}
                        </small>
                      </p>
                      <div dir="rtl">
                        <p className="is-size-4">
                          {post.frontmatter.description}
                        </p>
                        <div className="tags">
                          {post.frontmatter.tags.map((elem, index) => (
                            <Link
                              key={`elem-${index}`}
                              to={`/tags/${elem}/`}
                              className="tag custom-tag is-warning is-size-5 is-link"
                            >
                              {elem}
                            </Link>
                          ))}
                        </div>
                        <Link
                          className="button is-small is-danger is-outlined is-size-5 has-text-weight-semibold"
                          to={post.fields.slug}
                          dir="rtl"
                        >
                          استمرار
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    heroImage: imageSharp(id: { regex: "/city-night.jpg/" }) {
      sizes(maxWidth: 1152, quality: 45) {
        src
        srcSet
        sizes
      }
    }
    dataJson(type: { eq: "company" }) {
      companyNameEn
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date
            description
            tags
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object,
}
