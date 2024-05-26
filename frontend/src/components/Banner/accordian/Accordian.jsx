// import React from 'react';
// import '../accordian/accordian.css';
// import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


// const Accordian = () => {
//   return (
//     <>
//     <div className='accordian_container'>
//         <div className="container">
//             <div className="accordian_content">
//                 <div className="accordian_card">
//                 <h3><span><MdOutlineKeyboardDoubleArrowRight/></span> accordian card heading goes here</h3>
//                     <p>accordian para goes here</p>
//                 </div>
//                  <div className="accordian_card">
//                     <h3><span><MdOutlineKeyboardDoubleArrowRight/></span> accordian card heading goes here</h3>
//                     <p>accordian para goes here</p>
//                 </div>

//                 <div className="accordian_card">
//                     <h3><span><MdOutlineKeyboardDoubleArrowRight/></span> accordian card heading goes here</h3>
//                     <p>accordian para goes here</p>
//                 </div>

//                 <div className="accordian_card">
//                     <h3><span><MdOutlineKeyboardDoubleArrowRight/></span> accordian card heading goes here</h3>
//                     <p>accordian para goes here</p>
//                 </div>
//             </div>
//         </div>
//     </div>
      
//     </>
//   )
// }

// export default Accordian



import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import '../accordian/accordian.css';

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const isAccordionExpanded = (index) => {
    return activeIndex === index;
  };

  return (
      <div className='accordian_container global_margin_top'>
        <h4 className='accordianHeading'>Recruting Staff To</h4>
      <div className="container">
        <div className="accordian_content">
          <div className="accordian_card">
            <h3 onClick={() => toggleAccordion(0)}>
              <span className='arrowIcon'>{isAccordionExpanded(0) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span> Accordian Card Heading 0
            </h3>
            {isAccordionExpanded(0) && (
              <p className='accord_para'>lorem45</p>
            )}
          </div>
          <div className="accordian_card">
            <h3 onClick={() => toggleAccordion(1)}>
              <span>{isAccordionExpanded(1) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span> Accordian Card Heading 1
            </h3>
            {isAccordionExpanded(1) && (
             <p className='accord_para'>Accordian para goes here 1</p>
            )}
          </div>
          <div className="accordian_card">
            <h3 onClick={() => toggleAccordion(2)}>
              <span>{isAccordionExpanded(2) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span> Accordian Card Heading 2
            </h3>
            {isAccordionExpanded(2) && (
              <p className='accord_para'>Accordian para goes here 2</p>
            )}
          </div>

          <div className="accordian_card">
            <h3 onClick={() => toggleAccordion(3)}>
              <span>{isAccordionExpanded(3) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span> Accordian Card Heading 3
            </h3>
            {isAccordionExpanded(3) && (
              <p className='accord_para'>Accordian para goes here 3</p>
            )}
          </div>

          <div className="accordian_card">
            <h3 onClick={() => toggleAccordion(4)}>
              <span>{isAccordionExpanded(4) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span> Accordian Card Heading 4
            </h3>
            {isAccordionExpanded(4) && (
              <p className='accord_para'>Accordian para goes here 4</p>
            )}
          </div>

          <div className="accordian_card">
            <h3 onClick={() => toggleAccordion(5)}>
              <span>{isAccordionExpanded(5) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span> Accordian Card Heading 5
            </h3>
            {isAccordionExpanded(5) && (
              <p className='accord_para'>Accordian para goes here 5</p>
            )}
          </div>

          <div className="accordian_card">
            <h3 onClick={() => toggleAccordion(6)}>
              <span>{isAccordionExpanded(6) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span> Accordian Card Heading 6
            </h3>
            {isAccordionExpanded(6) && (
              <p className='accord_para'>Accordian para goes here 6</p>
            )}
          </div>

          <div className="accordian_card">
            <h3 onClick={() => toggleAccordion(7)}>
              <span>{isAccordionExpanded(7) ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span> Accordian Card Heading 7
            </h3>
            {isAccordionExpanded(7) && (
              <p className='accord_para'>Accordian para goes here 7</p>
            )}
          </div>
          {/* Add more accordion items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
