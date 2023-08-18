import React from 'react'
import "./AboutUsStyle.css"
import Logo from "../../assets/logo.png"

const AboutUs = () => {
  return (
    <>
    <div className="about">
      <img src={Logo} alt="lessonupimg" className='about-logo'/>
      <h1>LessonUp Institute Of Commerce & IT <br /> is an Educational Coaching center located at <br /> Mehta Shopping Complex, Opposite Sector 4 <br />
Police Station, New Shimla, Shimla, HP, 171009</h1>
      <div className="about-us">
        <div className="about-left">
          <h2>We Provide Coaching Services for the following:</h2>
          <ul>
            <p>CBSE CLASS XI / XII</p>
            <li>-Accountancy</li>
            <li>-Economics</li>
            <li>-Business Studies</li>
            <li>-Mathematics</li>
            <li>-Computer Science</li>
          </ul>
          <ul>
            <p>CBSE CLASS IX / X</p>
            <li>-Mathematics</li>
            <li>-Science</li>
          </ul>
          <ul>
            <p>CBSE CLASS VI / VII / VIII</p>
            <li>-Mathematics</li>
            <li>-Science</li>
          </ul>
          <ul>
            <p>PYTHON PROGRAMMING COURSE</p>
            <li>-Basic & Advanced courses</li>
            <li>-Learn Python in detail with basic understanding</li>
          </ul>
          <ul>
            <p>CA FOUNDATION COURSE</p>
            <li>-Syllabus covered for all 4 papers</li>
            <li>-Syllabus covered as per ICAI's curriculum</li>
          </ul>
        </div>
        <div className="about-right">
          <h2>OUR KEY FEATUERS ARE</h2>
          <ul>
            <p>Our Own Student Mobile App/ Student Login Portal</p>
            <li>-We have our own Mobile app for students where they can login using their login credentials.</li>
            <li>-Each and every correspondence regarding Time Table, Attendance, Exams, Tests, Assignments, Fee status and all notifications will be done via the Student Mobile App / Web Login Portal.</li>
          </ul>
          <ul>
            <p>ONLINE / OFFLINE CLASSES</p>
            <li>- Classes will be conducted in both Online and Offline modes.</li>
            <li>- Online classes will be conducted via our Student Mobile App / Web Login Portal.</li>
          </ul>
          <ul>
            <p>SMART CLASSES</p>
            <li>- We have Smart Classes at our Institute.</li>
            <li>- Classes are taken on Smart screens using Projectors.</li>
            <li>- We use our own custom made Study Material with visual Illustrative elements for Smart Classes.</li>
          </ul>
          <ul>
            <p>BEST IN CLASS FACULTY</p>
            <li>- We have experienced and Best in the class Faculty working with us.</li>
            <li>- You can check about our faculties in the <a href="/ourteam">'OUR TEAM'</a> section.</li>
          </ul>
          <ul>
            <p>BEST ATMOSPHERE FOR STUDENTS</p>
            <li>- We at LessonUp understand that every student is unique and has his/her own set of characteristics.</li>
            <li>
            - Owing to which, we always strive to adopt a unique approach for every different child.
            </li>
            <li>- This helps our every student to grow not only individually, but as well as a part of a group also.</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutUs