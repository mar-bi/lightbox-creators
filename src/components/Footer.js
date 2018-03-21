import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Icon from './Icon'
import ICONS from '../layouts/icons'

const FooterNav = ({ links }) => (
  <ul className="footer-menu">
    {links.map((link, index) => (
      <li key={`footer-nav-${index}`} className="footer-menu-item">
        <Link className="navbar-item is-capitalized" to={link.path}>
          {link.path}
        </Link>
      </li>
    ))}
  </ul>
)

const Footer = ({ links, data }) => (
  <div className="container">
    <div className="footer is-fixed-bottom">
      <div className="columns">
        <div className="column is-one-third-tablet has-right-border">
          <FooterNav links={links} />
        </div>

        <div className="column is-one-third-tablet has-right-border">
          <div className="icon-container">
            <a href={`mailto:${data.email}`}>
              <Icon icon={ICONS.MAIL} viewbox="0 0 28 28" />
            </a>
            <a href={data.facebook}>
              <Icon icon={ICONS.FACEBOOK} size="32" />
            </a>
            <a href={data.instagram}>
              <Icon icon={ICONS.INSTAGRAM} viewbox="0 0 28 28" />
            </a>
            <a href={data.twitter}>
              <Icon icon={ICONS.TWITTER} />
            </a>
          </div>
        </div>

        <div className="column is-one-third-tablet">
          <div className="content has-text-centered">
            <p className="has-text-warning">
              <span className="is-capitalized">{data.companyName}</span>
              {','}
              <br />
              {data.phone}
              {','}
              <br />
              {data.address}
            </p>
            <p className="is-size-7 has-text-info">
              made by{' '}
              <a id="made-by" href="https://mar-bi.github.io/">
                mar-bi studio
              </a>{' '}
              &#169; 2018
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer

FooterNav.propTypes = {
  links: PropTypes.array,
}

Footer.propTypes = {
  links: PropTypes.array,
  data: PropTypes.object,
}
