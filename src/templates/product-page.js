import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Hero from '../components/Hero'
import ImageGrid from '../components/ImageGrid'
import Projects from '../components/Projects'

export const ProductPageTemplate = ({
  imageSizes,
  title,
  heading,
  description,
  intro,
  projects,
  path,
  url,
}) => (
  <div>
    <Helmet title={`الفهد | ${title}`}>
      <link rel="canonical" href={`${url}${path}`} />
    </Helmet>
    <Hero image={imageSizes} size="medium" title={title} layer />
    <section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-12">
              <div className="content is-large user-content" dir="rtl">
                <div className="columns">
                  <div className="column is-8">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>

                <ImageGrid gridItems={intro.examples || []} />
                <Projects items={projects || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default ({ data, location }) => {
  const { frontmatter } = data.markdownRemark
  const { url, heroImage } = data

  return (
    <ProductPageTemplate
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      projects={frontmatter.projects}
      path={location.pathname}
      url={url.siteMetadata.url}
      imageSizes={heroImage.sizes}
    />
  )
}

export const productPageQuery = graphql`
  query ProductPage($id: String!, $slug: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
        intro {
          examples {
            image
            text
          }
        }
        projects {
          heading
          description
          images {
            image
          }
        }
      }
    }
    url: site {
      siteMetadata {
        url
      }
    }
    heroImage: imageSharp(id: { regex: $slug }) {
      sizes(maxWidth: 1152, quality: 45) {
        src
        srcSet
        sizes
      }
    }
  }
`
ProductPageTemplate.propTypes = {
  imageSizes: PropTypes.object,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.object,
  projects: PropTypes.array,
  path: PropTypes.string,
  url: PropTypes.string,
}
