import React from 'react'
import '../contact/contact.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  return (
    <>
    <div className='contact_container'>
        <div className="container">
          <div className="contact_content global_margin_top">
            <div className='address_container'>              
            <h3>Our Address</h3>
              <p><FaMapMarkerAlt/>samakhusi,Kathmandu,Nepal</p>
              <p> <MdEmail/>info@linkstar.com.np</p>
              <p> <FaPhoneAlt/>+97714957047</p>           
              </div>
            <div className='form_container'>
              <h3>Inquery Form</h3>
              <form className='form'>
                <input type="text" name="name" placeholder='Enter Your Name' />
                <input type="email" name="email" placeholder='Enter Your Email'/>
                <textarea className='message' name="message" id="" placeholder='Enter Your Message'/> 
                <button className='inqueryBtn'>Submit</button>
              </form>
            </div>
            <div className='map_container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.2073136036356!2d85.31758537447003!3d27.649056928061853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17000477c865%3A0xc8d8ea8f33bee317!2sNepalTech%20Innovations%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1716533411942!5m2!1sen!2snp" width="400" height="350"></iframe>
            </div>
          </div>
        </div>
    </div>
      
    </>
  )
}

export default Contact
