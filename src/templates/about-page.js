import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import Hero from '../components/Hero'

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  heroImage,
  path,
  url,
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Helmet title={`الفهد | ${title}`}>
        <link rel="canonical" href={`${url}${path}`} />
      </Helmet>
      <Hero image={heroImage.resize.src} size="medium" title={title} layer />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div dir="rtl">
                <PageContent
                  className="content is-large user-content"
                  content={content}
                />
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
      content={post.html}
      heroImage={data.heroImage}
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
      }
    }
    heroImage: imageSharp(id: { regex: "/door.jpg/" }) {
      resize(width: 1920) {
        src
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
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  heroImage: PropTypes.object,
  path: PropTypes.string,
  url: PropTypes.string,
}
