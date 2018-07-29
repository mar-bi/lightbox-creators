import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Hero from '../components/Hero'

export const ContactPageTemplate = ({
  title,
  image,
  address,
  phone,
  email,
  imageSizes,
  path,
  url,
}) => {
  return (
    <div>
      <Helmet title={`الفهد | ${title}`}>
        <link rel="canonical" href={`${url}${path}`} />
      </Helmet>
      <Hero image={imageSizes} size="medium" title={title} layer />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-5 is-offset-1">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-3">العنوان</h3>
                <h4 className="is-size-4">{address}</h4>
                <h3 className="has-text-weight-semibold is-size-3">تليفون</h3>
                <h4 className="is-size-6 eng-field">{phone}</h4>
                <h3 className="has-text-weight-semibold is-size-3">
                  بريد اليكترونى
                </h3>
                <h4 className="is-size-6 eng-field">{email}</h4>
              </div>
            </div>
            <div className="column is-5">
              <figure className="image is-square">
                <img src={image} alt="our location" />
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
  contentComponent: PropTypes.string,
  image: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  imageSizes: PropTypes.object,
  path: PropTypes.string,
  url: PropTypes.string,
}

export default ({ data, location }) => {
  const { markdownRemark: post, heroImage, url } = data

  return (
    <ContactPageTemplate
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      address={post.frontmatter.address}
      phone={post.frontmatter.phone}
      email={post.frontmatter.email}
      imageSizes={heroImage.sizes}
      path={location.pathname}
      url={url.siteMetadata.url}
    />
  )
}

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        address
        phone
        email
      }
    }
    heroImage: imageSharp(id: { regex: "/golden-light.jpg/" }) {
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
