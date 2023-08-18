import React from 'react'
import "./Team.css"
import BB from "../../assets/bhanuBhaiya.jpg"
import AD from "../../assets/ArtiDi.jpg"

const Team = () => {
  return (
    <>
    <div className="team">
        <div className="team-img">
            <img src={BB} alt="bhanuBhaiya" />
        </div>
        <div className="team-text">
            <h3>KUMAR BHANU SHARMA</h3>
            <h4>Co - Founder & Principal / Faculty Mathematics & Information Technology</h4>
            <h3>Qualifications & Achievements</h3>
            <ul>
                <li>-B.Tech CSE (Amity University, Noida)</li>
            </ul>            
            <p>Mr. Kumar Bhanu Sharma is one of the two Co-Founders and The Principal of LessonUp Institute Of Economics. He is a Computer Science Engineer by background and a young Education enthusiast who aims at providing the best in class educational services to the young generation. His vision is to help the new generation of students to get the best out of their potential and contribute in the best way towards the society and the future of our Nation.</p>
        </div>
    </div>

    <div className="team team-2">
        <div className="team-text">
            <h3>ARTI JAMTA</h3>
            <h4>Co - Founder & Vice Principal / Faculty Economics & Business Studies</h4>
            <h3>Qualifications & Achievements</h3>
            <ul>
                <li>-B.COM (Punjab University)</li>
                <li>-M.COM (HP University)</li>
                <li>-Qualified UGC NET (Commerce) Exam 4 Times</li>
                <li>-More than 5 years of Teaching Experience</li>
            </ul>            
            <p>Ms. Arti Jamta is one of the two Co-Founders and The Vice Principal of LessonUp Institute Of Economics. She has an immense teaching experience of more than 5 years for teaching Economics and Business Studies to Classes 11th & 12th and has had promising results. Through her deep knowledge and understanding of the subjects along with her experience in the teaching profession, she aims at guiding the new generation into the right direction and help pave their future.</p>
        </div>
        <div className="team-img">
            <img src={AD} alt="bhanuBhaiya" />
        </div>
    </div>
    </>
  )
}

export default Team