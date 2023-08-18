import React from 'react'
import "./BoxStyle.css"
import { BiWorld } from "react-icons/bi"
import { FaChalkboardTeacher } from "react-icons/fa"
import { ImTrophy } from "react-icons/im"

const Box = () => {
  return (
    <>
    <div className="box">
        <a href="/about">
        <div className="item">
            <h3><BiWorld size={30} className='icon'/> <br />Our Curriculum</h3>
        </div>
        </a>

        <a href="/ourteam">
        <div className="item">
            <h3><FaChalkboardTeacher size={30}/> <br />Our Team</h3>
        </div>
        </a>

       <a href="#toppers">
       <div className="item">
            <h3><ImTrophy size={30}/> <br />Our Achievers</h3>
        </div>
       </a>
    </div>
    </>
  )
}

export default Box