import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Navbar = ({ title, links }) => (
  <nav className="navbar is-transparent is-fixed-top has-bottom-border">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          {title}
        </Link>
      </div>
      
      <div className="navbar-start">
        {
          links.map((link, index) => (
            <Link key={`nav-${index}`} 
              className="navbar-item is-capitalized" 
              to={link.path}>
              {link.path}
            </Link>
          ))
        }
      </div>

      <div className="navbar-end">
        <div className="field has-addons has-padding">
          <div className="control">
            <input className="input" type="text" placeholder="Search"/>
          </div>

          <div className="control">
            <a className="button is-danger">
              Search
            </a>
          </div>
        
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar


Navbar.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array
}

