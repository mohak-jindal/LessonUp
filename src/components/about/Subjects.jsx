import React from 'react';
import "./SubjectStyle.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const Subjects = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
    <div className="carousel">
    <h1 className="main-heading">SUBJECTS WE SPECIALISE & TEACH</h1>
      <Slider {...settings}>
      <div className="card card-1">
        <p>Accounts</p>
      </div>
      <div className="card card-2">
        <p>Business Studies</p>
      </div>
      <div className="card card-3">
        <p>Economics</p>
      </div>
      <div className="card card-4">
        <p>Mathematics</p>
      </div>
      <div className="card card-5">
        <p>Science</p>
      </div>
      <div className="card card-6">
        <p>College Entrance</p>
      </div>
      <div className="card card-7">
        <p>CA Foundation</p>
      </div>
      <div className="card card-8">
        <p>Competitive Exams</p>
      </div>
      </Slider>
    </div>
    </>
  )
}

export default Subjects 