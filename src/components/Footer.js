import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Icon from './Icon'
import ICONS from '../layouts/icons'

const FooterNav = ({ links }) => (
  <ul className="footer-menu">
    {links.map((link, index) => (
      <li key={`footer-nav-${index}`} className="footer-menu-item">
        <Link className="navbar-item is-capitalized nav-item" to={link.path} exact>
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
)

const Footer = ({ links, data }) => (
  <div className="container" id="footer">
    <div className="footer">
      <div className="columns" dir="rtl">
        <div className="column is-one-third-tablet has-right-border">
          <FooterNav links={links} />
        </div>

        <div className="column is-one-third-tablet has-right-border">
          <div className="content has-text-centered">
            <p className="has-text-warning is-size-5" dir="ltr">
              <span className="is-capitalized" dir="rtl">
                {data.companyName}
              </span>
              <br />
              <span className="eng-field is-size-7">{data.phone}</span>
              <br />
              <span dir="rtl">{data.address}</span>
            </p>
          </div>
        </div>

        <div className="column is-one-third-tablet">
          <div className="icon-container">
            <a href={`mailto:${data.email}`} aria-label="Email">
              <Icon icon={ICONS.MAIL} viewbox="0 0 28 28" />
            </a>
            <a href={data.facebook} aria-label="Facebook">
              <Icon icon={ICONS.FACEBOOK} size={32} />
            </a>
            <a href={data.instagram} aria-label="Instagram">
              <Icon icon={ICONS.INSTAGRAM} viewbox="0 0 28 28" />
            </a>
            <a href={data.twitter} aria-label="Twitter">
              <Icon icon={ICONS.TWITTER} />
            </a>
          </div>
          <p id="creator" className="has-text-warning has-text-centered">
            made by{' '}
            <a id="made-by" href="https://mar-bi.github.io/">
              marbi studio
            </a>{' '}
            &#169; 2018
          </p>
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
