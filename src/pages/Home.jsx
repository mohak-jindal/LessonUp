import React from 'react'
import Header from "../components/header/Header"
import Box from "../components/box/Box"
import ContactForm from "../components/contact/ContactForm"
import Subjects from '../components/about/Subjects'
// import Courses from "../components/about/Courses"
import ContactBanner from "../components/contact/ContactBanner"

const Home = () => {
  return (
    <>
    <Header />
    <Box />
    <ContactForm />
    <Subjects />
    {/* <Courses /> */}
    <ContactBanner />
    </>
  )
}

export default Home