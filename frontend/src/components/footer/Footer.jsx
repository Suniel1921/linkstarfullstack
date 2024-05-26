import React from 'react';
import '../footer/footer.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
    <div className='footerContainer'> 
    <div className='container'>
        <div className='footer'>
          <div className='quick_link'>
            <h3>Quick Links</h3>
            <ul className='links'>
              <li><p>About</p></li>
              <li><p>Why Us?</p></li>
              <li><p>How its work?</p></li>
              <li><p>Required Document</p></li>
              <li><p>Why Nepalese?</p></li>
            </ul>
            
          </div>
          <div className='contact_info'>
            <h3>Contact Info</h3>
            <ul className='links'>
              <li><p><FaMapMarkerAlt/> samakhusi,Kathmandu,Nepal</p></li>
              <li><p><MdEmail/> info@linkstar.com.np</p></li>
              <li><p><FaPhoneAlt/>+97714361490</p></li>
            </ul>
          </div>
          <div className='social_media'>
            <h3>Social Media</h3>
            <p>Stay connected with us through social media.</p>
            <ul className='icons'>
             <p><FaSquareFacebook/></p>
              <p><FaSquareInstagram/></p>
              <p><FaTwitterSquare/></p>
            </ul>
          </div>
        </div>
    </div>
    </div>
      
    </>
  )
}

export default Footer
