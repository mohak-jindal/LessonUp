import React from 'react'
import "./ContactFormStyles.css"
import { AiOutlinePhone } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { BiCurrentLocation } from "react-icons/bi"

const ContactForm = () => {
  return (
    <>
    <div className="contact-form">

        <div className="left">
            <h1>Make learning fun with us</h1>
            <ul>
                <li>
                    <AiOutlinePhone size={30} className='icon'/> 
                    <p>+91 70185 18411 / +91 98058 34548</p>
                    </li>
                <li>
                    <MdEmail size={30} className='icon'/> 
                    <p>lessonupclasses@gmail.com</p>
                    </li>
                <li>
                    <BiCurrentLocation size={30} className='icon'/> 
                    <p>Mehta Shopping Complex, Opposite Sector 4 <br />
Police Station, New Shimla, Shimla, HP, 171009</p>    
                </li>
            </ul>
        </div>

        <div className="right">
            <h1>Get a free demo class booked</h1>
            <form action="">
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
                <input type="number" placeholder='Phone Number'/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default ContactForm