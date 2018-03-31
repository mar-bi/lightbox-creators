import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Navbar = ({ title, links }) => {
  const handleMobileNavbar = () => {
    const elem = document.getElementsByClassName('navbar-burger')[0]
    const target = document.getElementById('navMenu')

    elem.classList.toggle('is-active')
    target.classList.toggle('is-active')
  }

  return (
    <nav
      className="navbar is-transparent is-fixed-top"
      role="navigation"
      aria-label="main navigation"
      dir="rtl"
    >
      <div className="container is-widescreen has-bottom-border">
        {/* brand navbar */}
        <div className="navbar-brand" dir="rtl">
          <Link to="/" className="navbar-item is-size-2-widescreen is-size-3">
            {title}
          </Link>

          {/* mobile & tablet navigation */}
          <div
            className="navbar-burger mobile-nav-menu"
            data-target="navMenu"
            onClick={handleMobileNavbar}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* desktop navigation */}
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start" dir="rtl">
            {links.map((link, index) => (
              <Link
                key={`nav-${index}`}
                className="navbar-item is-capitalized is-size-4"
                to={link.path} exact
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="navbar-end">
            <div className="field has-padding search-box">
              <div className="control">
                <input
                  className="input is-size-5"
                  type="text"
                  placeholder="بحث"
                />
              </div>

              <div className="control">
                <a className="button is-danger is-size-5">بحث</a>
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
  links: PropTypes.array,
}
