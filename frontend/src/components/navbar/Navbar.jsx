// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../navbar/navbar.css';
// import Banner from '../Banner/Banner';

// const Navbar = () => {
//   return (
//     <div className='navbarContainer container'>
//       <div className='banner'><Banner /></div>
//       <hr />
//       <div className='navbar global_flex '>
//         <h3>logo</h3>
//         <ul className='navlinks'>
//           <li><NavLink to='/'>Home</NavLink></li>
//           <li><NavLink to='/our-company'>Our Company</NavLink></li>
//           <li><NavLink to='/procedure'>Procedure</NavLink></li>
//           <li><NavLink to='/advertisment'>Advertisment</NavLink></li>
//           <li><NavLink to='/why-us'>Why Us?</NavLink></li>
//           <li><NavLink to='/about'>About</NavLink></li>
//           <li><NavLink to='/contact'>Contact Us</NavLink></li>
//           <li><NavLink to='/apply-now'>Apply Now</NavLink></li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;






import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '../navbar/navbar.css';
import Banner from '../Banner/Banner';
import { TbMenuDeep } from "react-icons/tb";


const Navbar = () => {

  const openLicensePdf = () => {
    window.open('/image/LINK-STAR-LICENSE.pdf', '_blank');
  };

 const openCompanyProfilePdf = ()=>{
  window.open('/image/Link-Star-Brochure.pdf', '_blank')
 }

  const ourCompanyMenu = (
    <Menu>
      <Menu.Item key="1">
        <NavLink to='/our-company/chairperson'>Words from Chairperson</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to='/our-company/managing-director'>Words from Managing Director</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to='/our-company/intl-marketing-director'>Words from Int'l Marketing Director</NavLink>
      </Menu.Item>
      <Menu.Item key="4">
        <NavLink to='/our-company/marketing-officer'>Words from Marketing Officer</NavLink>
      </Menu.Item>
      <Menu.Item key="5">
        <NavLink to='/our-company/general-manager'>Words from General Manager</NavLink>
      </Menu.Item>
      <Menu.Item key="6">
        <NavLink to='/our-company/BOD'>Words from BOD</NavLink>
      </Menu.Item>
      <Menu.Item key="7">
        <NavLink onClick={openLicensePdf}>View Company License</NavLink>
      </Menu.Item>
      <Menu.Item key="8">
        <NavLink onClick={openCompanyProfilePdf}>View Company Profile</NavLink>
      </Menu.Item>
    </Menu>
  );

  const procedureMenu = (
    <Menu>
      <Menu.Item key="1">
        <NavLink to='/procedure/why-nepalese'>Why Nepalese</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to='/procedure/how-its-work'>How its Work</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to='/procedure/required-documents'>Required Documents</NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='navbarContainer container'>
      <div className='banner'><Banner /></div>
      <hr />
      <div className='navbar global_flex'>
        {/* <h3>logo</h3> */}
        <img className='logo' src="/image/logopng.png" alt="iink star logo" />
        <ul className='navlinks'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li>
            <Dropdown overlay={ourCompanyMenu}>
              <NavLink to='/our-company' className='ant-dropdown-link' onClick={e => e.preventDefault()}>
                Our Company <DownOutlined />
              </NavLink>
            </Dropdown>
          </li>
          <li>
            <Dropdown overlay={procedureMenu}>
              <NavLink to='/procedure' className='ant-dropdown-link' onClick={e => e.preventDefault()}>
                Procedure <DownOutlined />
              </NavLink>
            </Dropdown>
          </li>
          <li><NavLink to='/why-us'>Why Us?</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact Us</NavLink></li>
          <li><NavLink to='/apply-now'>Apply Now</NavLink></li>
          <li><NavLink to='/vacency'>Vacency</NavLink></li>
       
        </ul>
        <div className='hambugerMenu'><TbMenuDeep/></div>
      </div>
    </div>
  );
}

export default Navbar;

