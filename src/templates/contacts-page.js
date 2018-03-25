import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../components/Hero'
import GoldenLight from '../img/golden-light.jpg'

export const ContactPageTemplate = ({
  title,
  image,
  address,
  phone,
  email,
}) => {
  return (
    <div>
      <Hero image={GoldenLight} size="medium" title={title} layer/>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-5 is-offset-1">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-3">العنوان</h3>
                <h4 className="is-size-4">{address}</h4>
                <h3 className="has-text-weight-semibold is-size-3">تليفون</h3>
                <h4 className="is-size-4">{phone}</h4>
                <h3 className="has-text-weight-semibold is-size-3">بريد اليكترونى</h3>
                <h4 className="is-size-4">{email}</h4>
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
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ContactPageTemplate
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      address={post.frontmatter.address}
      phone={post.frontmatter.phone}
      email={post.frontmatter.email}
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
  }
`
