import React from 'react'
import "./ContactBannerStyles.css"

const ContactBanner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h3>LessonUp</h3>
        <h1>Get your kid admitted to our esteemed insitution</h1>
        <br />
        <a href="/contact">BECOME A MEMBER</a>
      </div>
    </div>
  )
}

export default ContactBanner