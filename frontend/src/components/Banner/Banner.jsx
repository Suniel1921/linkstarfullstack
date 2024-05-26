import React from 'react';
import '../Banner/banner.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Banner = () => {
  const email = "info@linkstar.com.np";
  const phoneNumber = "+97714957047";
  const whatsappNumber = '+9779851337276'

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, "_blank");
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  return (
    <>
      <div className='bannerContainer global_flex'>
        <div className='bannerDetails'>
          <p><FaMapMarkerAlt/>samakhusi,Kathmandu,Nepal</p>
          <p onClick={handleEmailClick}><MdEmail/> {email}</p>
          <p onClick={handlePhoneClick}><FaPhoneAlt/> {phoneNumber}</p>
        </div>
        <div className='bannerWhatsapp' onClick={handleWhatsAppClick}>
          <p><RiWhatsappFill className='whatsappIcon'/> <span>{whatsappNumber}</span></p>
        </div>
      </div>
    </>
  );
};

export default Banner;
