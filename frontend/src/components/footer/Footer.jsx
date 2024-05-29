import '../footer/footer.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='footerContainer'> 
    <div className='container'>
        <div className='footer'>
          <div className='quick_link'>
            <h3>Quick Links</h3>
            <ul className='links'>
              <li><NavLink to={'/about'}>About</NavLink></li> 
              <li><NavLink to={'/why-us'}>Why Us?</NavLink></li>              
              <li><NavLink to={'/procedure/how-its-work'}>How its Works</NavLink></li>
              <li><NavLink to={'/procedure/required-documents'}>Required Document</NavLink></li>
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
            <Link to="https://www.facebook.com/linkstarmanpowerservices" target="_blank"> <FaSquareFacebook /></Link>
            <Link to="https://www.instagram.com/linkstarmanpower/" target="_blank"> <FaSquareInstagram /></Link>
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
