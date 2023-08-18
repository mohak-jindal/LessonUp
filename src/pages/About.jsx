import React from 'react'
import HeaderTwo from '../components/header/HeaderTwo'
import Subjects from "../components/about/Subjects"
import AboutUs from "../components/about/AboutUs"

const About = () => {
  return (
    <>
    <HeaderTwo heading="ABOUT-US" sub="This is our curriculum"/>
    <AboutUs />
    <Subjects />
    </>
  )
}

export default About