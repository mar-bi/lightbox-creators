import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'

export const AboutPageTemplate = ({
  title,
  testimonials,
  content,
  contentComponent,
  imageSizes,
  path,
  url,
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Helmet title={`الفهد | ${title}`}>
        <link rel="canonical" href={`${url}${path}`} />
      </Helmet>
      <Hero image={imageSizes} size="medium" title={title} layer />
      <section className="section section--gradient section-about">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div dir="rtl">
                <PageContent
                  className="content is-large user-content"
                  content={content}
                />
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ({ data, location }) => {
  const { markdownRemark: post, url } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      testimonials={post.frontmatter.testimonials}
      content={post.html}
      imageSizes={data.heroImage.sizes}
      path={location.pathname}
      url={url.siteMetadata.url}
    />
  )
}

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        testimonials {
          author
          quote
        }
      }
    }
    heroImage: imageSharp(id: { regex: "/door.jpg/" }) {
      sizes(maxWidth: 1152, quality: 45) {
        src
        srcSet
        sizes
      }
    }
    url: site {
      siteMetadata {
        url
      }
    }
  }
`
AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  testimonials: PropTypes.array,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  imageSizes: PropTypes.object,
  path: PropTypes.string,
  url: PropTypes.string,
}
