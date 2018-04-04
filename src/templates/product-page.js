import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import ImageGrid from '../components/ImageGrid'
import Projects from '../components/Projects'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  projects,
  testimonials,
  path,
  url
}) => (
  <div>
    <Helmet title={`الفهد | ${title}`}>
      <link rel="canonical" href={`${url}${path}`}/>
    </Helmet>
    <Hero image={image} size="medium" title={title} layer />
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
                <Testimonials testimonials={testimonials} />
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
  const { url } = data

  return (
    <ProductPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      projects={frontmatter.projects}
      testimonials={frontmatter.testimonials}
      path={location.pathname}
      url={url.siteMetadata.url}
    />
  )
}

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
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
        testimonials {
          author
          quote
        }
      }
    }
    url: site {
      siteMetadata {
        url
      }
    }
  }
`
ProductPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.object,
  projects: PropTypes.array,
  testimonials: PropTypes.array,
  path: PropTypes.string,
  url: PropTypes.string
}
