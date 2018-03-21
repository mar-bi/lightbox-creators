import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Navbar = ({ title, links }) => {
  const handleMobileNavbar = (e) => {
    const elem = e.target

    // Get the target from the "data-target" attribute
    const elemTarget = e.target.dataset.target
    const target = document.getElementById(elemTarget)

    //Toggle the class on both the "navbar-burger" and the "navbar-menu"
    elem.classList.toggle('is-active')
    target.classList.toggle('is-active')
  }

  return (
    <nav 
      className="navbar is-transparent is-fixed-top"
      role="navigation" 
      aria-label="main navigation"
    >
      <div className="container has-bottom-border">
        {/* brand navbar */}
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            {title}
          </Link>

          {/* mobile & tablet navigation */}
          <div 
            className="navbar-burger" 
            data-target="navMenu" 
            onClick={handleMobileNavbar}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        {/* desktop navigation */}
        <div className="navbar-menu" id="navMenu">
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
      </div>
    </nav>
  )
}

export default Navbar


Navbar.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array
}
