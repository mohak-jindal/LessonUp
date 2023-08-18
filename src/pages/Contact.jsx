import React from 'react'
import HeaderTwo from '../components/header/HeaderTwo'
import ContactForm from '../components/contact/ContactForm'
import Map from "../components/contact/Map"

const Contact = () => {
  return (
    <>
    <HeaderTwo heading="CONTACT-US" sub="Feel free to contact us!" />
    <ContactForm />
    <Map />
    </>
  )
}

export default Contact