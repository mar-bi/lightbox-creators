import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import ImageGrid from '../components/ImageGrid'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
}) => (
  <div>
    <Hero
      image={image}
      size="medium"
      title={title}
      layer
    />
    <section className="section section--gradient">  
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-12">
              <div className="content is-large user-content" dir="rtl">
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>

                {/*<Features gridItems={intro.blurbs} /> */}
                <ImageGrid gridItems={intro.blurbs} />

                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main.heading}
                    </h3>
                    <p>{main.description}</p>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <article className="tile is-child">
                          <img
                            style={{ borderRadius: '5px' }}
                            src={main.image1.image}
                            alt={main.image1.alt}
                          />
                        </article>
                      </div>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <img
                            style={{ borderRadius: '5px' }}
                            src={main.image2.image}
                            alt={main.image2.alt}
                          />
                        </article>
                      </div>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <img
                          style={{ borderRadius: '5px' }}
                          src={main.image3.image}
                          alt={main.image3.alt}
                        />
                      </article>
                    </div>
                  </div>
                </div>
                <Testimonials testimonials={testimonials} />
                
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  </div>
)

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <ProductPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      testimonials={frontmatter.testimonials}
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
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
