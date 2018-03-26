import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Hero from '../components/Hero'
import Door from '../img/door.jpg'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Hero
        image={Door}
        size="medium"
        title={title}
        layer
      />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div dir="rtl">
                <PageContent className="content is-large user-content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
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
  }
`
AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}
