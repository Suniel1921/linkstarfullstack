// import React from 'react'
// import '../applynow/applynow.css'

// const ApplyNow = () => {
//   return (
//     <>
//       <div className='appynow_container'>
//         <div className="container">
//             <div className="applynow_content">
//                 <div className="left_appynow">
//                     <img className='jobImg' src="/image/j.jpg" alt="link star image" />
//                 </div>
//                 <div className="right_applynow">
//                     <form className='appynow_form'>
//                         <input type="text" name="name" id="" placeholder='Name' />
//                         <input type="email" name="email" id=""  placeholder='Email'/>
//                         <input type="text" name="address" id="" placeholder='Address'/>
//                         <input type="number" name="phone" id="" placeholder='Phone' />
//                         <input type="number" name="dateofbirth" id="" placeholder='Date of Birth' />
//                         <input type="text" name="country" id="" placeholder='Intrested Country'/>
//                         <input type="text" name="education" id="" placeholder='Euducation' />
//                         <button>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//         </div></>
  
//   )
// }

// export default ApplyNow










import React, { useState } from 'react';
import '../applynow/applynow.css';

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    dateOfBirth: '',
    country: '',
    education: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, address, phone, dateOfBirth, country, education } = formData;
    const mailtoLink = `mailto:info@linkstar.com.np?subject=Job Application&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AAddress: ${address}%0D%0APhone: ${phone}%0D%0ADate of Birth: ${dateOfBirth}%0D%0AInterested Country: ${country}%0D%0AEducation: ${education}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className='appynow_container'>
        <div className="container">
          <div className="applynow_content">
            <div className="left_appynow">
              <img className='jobImg' src="/image/j.jpg" alt="link star image" />
            </div>
            <div className="right_applynow">
              <form className='appynow_form' onSubmit={handleSubmit} action="mailto:sunielsharma1921@gmail.com" method="post" encType="text/plain">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Name' />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' />
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder='Address' />
                <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder='Phone' />
                <input type="text" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder='Date of Birth' />
                <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder='Interested Country' />
                <input type="text" name="education" value={formData.education} onChange={handleChange} placeholder='Education' />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyNow;
