import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.scss'

const Seo = ({ title, description, image, url }) => {
  const seoTitle = title || 'الفهد للديكور والتشطيبات',
    seoDescription = description || '',
    seoImage = `${url}${image}`,
    seoUrl = url

  return (
    <Helmet defaultTitle={seoTitle}>
      <html lang="ar" />

      {/* General tags */}
      <meta name="description" content={seoDescription} />
      <meta name="image" content={seoImage} />
      <link rel="canonical" href={url} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={seoUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {/*<meta name="twitter:creator" content={config.twitter} /> */}
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  )
}

const TemplateWrapper = ({ children, data }) => {
  return (
    <div>
      <Seo
        title={data.site.siteMetadata.title}
        description={data.dataJson.description}
        image={data.image.resize.src}
        url={data.site.siteMetadata.url}
      />
      <Navbar
        title={data.site.siteMetadata.title}
        links={data.site.siteMetadata.navLinks}
      />
      <div id="wrapper">{children()}</div>
      <Footer links={data.site.siteMetadata.footerLinks} data={data.dataJson} />
    </div>
  )
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
  location: PropTypes.object,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        url
        navLinks {
          path
          name
        }
        footerLinks {
          path
          name
        }
      }
    }
    dataJson(type: { eq: "company" }) {
      companyName
      description
      address
      email
      phone
      email
      facebook
      twitter
      instagram
    }
    image: imageSharp(id: { regex: "/site-preview.jpg/" }) {
      resize(width: 400) {
        src
      }
    }
  }
`
