import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Hero from '../components/Hero'
import CityNight from '../img/city-night.jpg'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { companyNameEn: company } = data.dataJson
    const rtlDate = dateStr => {
      const unixTime = new Date(dateStr)
      return unixTime.toLocaleDateString('ar-EG')
    }

    return (
      <div>
        <Hero image={CityNight} size="large" title={company} layer main />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <h2 className="has-text-weight-bold is-size-2" dir="rtl">
                    الأخبار
                  </h2>
                </div>
                {posts
                  .filter(
                    post => post.node.frontmatter.templateKey === 'blog-post'
                  )
                  .map(({ node: post }) => (
                    <div
                      className="content blog-container"
                      style={{
                        border: '1px solid #c0b283',
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
                      <p dir="rtl" className="is-size-4">
                        {post.frontmatter.description}
                        <br />
                        <br />
                        <Link
                          className="button is-small is-danger is-outlined is-size-5 has-text-weight-semibold"
                          to={post.fields.slug}
                          dir="rtl"
                        >
                          استمرار
                        </Link>
                      </p>
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
          }
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object,
}
