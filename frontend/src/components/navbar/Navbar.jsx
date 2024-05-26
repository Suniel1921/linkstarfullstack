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

const Navbar = () => {
  const ourCompanyMenu = (
    <Menu>
      <Menu.Item key="1">
        <NavLink to='/our-company/ceo'>Words from CEO</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to='/our-company/manager'>Words from Manager</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to='/our-company/staff'>Words from Staff</NavLink>
      </Menu.Item>
    </Menu>
  );

  const procedureMenu = (
    <Menu>
      <Menu.Item key="1">
        <NavLink to='/procedure/ceo'>Procedure by CEO</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to='/procedure/manager'>Procedure by Manager</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to='/procedure/staff'>Procedure by Staff</NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='navbarContainer container'>
      <div className='banner'><Banner /></div>
      <hr />
      <div className='navbar global_flex'>
        <h3>logo</h3>
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
      </div>
    </div>
  );
}

export default Navbar;
