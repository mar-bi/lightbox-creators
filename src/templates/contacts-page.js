import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Hero from '../components/Hero'
import GoldenLight from '../img/golden-light.jpg'


export const ContactPageTemplate = ({
  title, 
  content, 
  contentComponent, 
  mapAlt, 
  mapSrc
}) => {
  const PageContent = contentComponent || Content
  
  return (
    <div>
      <Hero image={GoldenLight} size="medium" title={title}/>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-5 is-offset-1">
              <PageContent className="content contact-page" content={content} />
            </div>
            <div className="column is-5">
              <figure className="image is-square">
                <img src={mapSrc} alt={mapAlt}/>
              </figure>
            </div>
          </div>
        </div>
      </section> 
    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.string,
  mapSrc: PropTypes.string,
  mapAlt: PropTypes.string
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      mapSrc={post.frontmatter.mapSrc}
      mapAlt={post.frontmatter.mapAlt}
      content={post.html}
    />  
  )
}

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: {eq: $id }) {
      html
      frontmatter {
        title
        mapSrc
        mapAlt
      }
    }
  }
`