import React from 'react'
import "./FooterStyles.css"

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="info">

            <div className="info-left">
                <h1>OPENING HOURS</h1>
                <h2>Please Come Visit Us for Enrollments/Admissions</h2>
                <p><span>Monday - Saturday:</span> 9AM - 6PM</p>
                <p><span>Sunday:</span> Closed</p>
            </div>

            <div className="info-right">
                <h1>LessonUp Institute of Commerce and IT</h1>
                <p>Mehta Shopping Complex, Opposite Sector 4
                Police Station, New Shimla, Shimla, HP, 171009</p>
                <p>lessonupclasses@gmail.com</p>
                <p>+91 70185 18411 / +91 98058 34548</p>
            </div>
        </div>

        <div className="last">
            <p>&copy; LESSONUP INSTITUTE OF COMMERCE AND IT | ALL RIGHTS RESERVED </p>
        </div>
    </div>
    </>
  )
}

export default Footer