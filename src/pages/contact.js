import React from 'react'
import Hero from '../components/Hero'
import GoldenLight from '../img/golden-light.jpg'


const ContactPage = () => (
  <div>
  	<Hero image={GoldenLight} size="medium" />
    <section className="section">
      <div className="container">
      	<div className="content">
          <h1 className="has-text-weight-bold is-size-2">Our contacts</h1>
        </div>
      </div>
    </section>    
  </div>
)

export default ContactPage