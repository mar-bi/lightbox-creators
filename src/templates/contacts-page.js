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
  heroImage
}) => {

  return (
    <div>
      <Helmet title={`الفهد | ${title}`} />
      <Hero image={heroImage.resize.src} size="medium" title={title} layer />
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
  heroImage: PropTypes.object
}

export default ({ data }) => {
  const { markdownRemark: post, heroImage } = data

  return (
    <ContactPageTemplate
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      address={post.frontmatter.address}
      phone={post.frontmatter.phone}
      email={post.frontmatter.email}
      heroImage={heroImage}
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
    heroImage: imageSharp(id: {regex: "/golden-light.jpg/"}){
      resize(width: 1920){
        src
      }
    }
  }
`
