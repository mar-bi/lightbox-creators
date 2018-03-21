import React from 'react'

const Footer = () => (
  <div className="container">
    <div className="footer is-fixed-bottom">
      <div className="content has-text-centered">
        <p className="has-text-warning">Add company contacts</p>
        <p className="is-size-7 has-text-info">
          made by 
          {' '}
          <a id="made-by" href="https://mar-bi.github.io/">
            mar-bi
          </a>
          {' '}
          studio
        </p>
      </div>
    </div>  
  </div>
)

export default Footer