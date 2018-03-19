import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'


const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <Navbar
      title={data.site.siteMetadata.title}
      links={data.site.siteMetadata.navLinks}
    />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
}

export default TemplateWrapper


export const query = graphql`
	query LayoutQuery {
		site {
			siteMetadata {
				title
				navLinks {
					path
					name
				}
			}
		}
	}
`

