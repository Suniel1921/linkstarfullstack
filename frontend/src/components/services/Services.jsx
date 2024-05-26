// import React from 'react';
// import '../services/services.css';
// const Services = () => {
//   return (
//     <>
//     <div className='services_container global_margin_top'>
//         <div className="container">
//             <h3>Our Serivices</h3>

//             <div className="services_content">
//                 <div className="left_service">
//                     <div className="card">
//                         <div className="child_card">
//                             <p>icons</p>
//                             <h3 className='cardHeading'>Heading Goes here</h3>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod nam aut sint tenetur at quam, assumenda recusandae. Quasi, reiciendis!</p>
//                         </div>
//                         <div className="child_card">
//                             <p>icons</p>
//                             <h3 className='cardHeading'>Heading Goes here</h3>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod nam aut sint tenetur at quam, assumenda recusandae. Quasi, reiciendis!</p>
//                         </div>
//                         <div className="child_card">
//                             <p>icons</p>
//                             <h3 className='cardHeading'>Heading Goes here</h3>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod nam aut sint tenetur at quam, assumenda recusandae. Quasi, reiciendis!</p>
//                         </div>
//                         <div className="child_card">
//                             <p>icons</p>
//                             <h3 className='cardHeading'>Heading Goes here</h3>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod nam aut sint tenetur at quam, assumenda recusandae. Quasi, reiciendis!</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="right_service">
//                     <img src="/image/global.png" alt="" />
//                 </div>
//             </div>
//         </div>
//     </div>
      
//     </>
//   )
// }

// export default Services





import React, { useState } from 'react';
import '../services/services.css';

const Services = () => {
  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (e) => {
    const image = e.target;
    const rect = image.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    setRotation(angle + 90); // Adding 90 degrees to make 0 degree point to the right
  };

  const handleMouseLeave = () => {
    setRotation(0);
  };

  return (
    <div className='services_container global_margin_top'>
      <div className="container">
        <h3>Our Services</h3>
        <div className="services_content">
          <div className="left_service">
            <div className="card">
              <div className="child_card">
                <p>icons</p>
                <h3 className='cardHeading'>Heading Goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod nam aut sint tenetur at quam, assumenda recusandae. Quasi, reiciendis!</p>
              </div>
              <div className="child_card">
                <p>icons</p>
                <h3 className='cardHeading'>Heading Goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod nam aut sint tenetur at quam, assumenda recusandae. Quasi, reiciendis!</p>
              </div>
              <div className="child_card">
                <p>icons</p>
                <h3 className='cardHeading'>Heading Goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod nam aut sint tenetur at quam, assumenda recusandae. Quasi, reiciendis!</p>
              </div>
              <div className="child_card">
                <p>icons</p>
                <h3 className='cardHeading'>Heading Goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod nam aut sint tenetur at quam, assumenda recusandae. Quasi, reiciendis!</p>
              </div>
            </div>
          </div>
          <div className="right_service">
            <img className='globalImg'
              src="/image/global.png"
              alt=""
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transform: `rotate(${rotation}deg)` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;


