import React from 'react'
import SideMenu from './SideMenu'
import CreateVacency from './CreateVacency'
import '../admin/adminDashboard.css';

const AdminDashboard = () => {
  return (
   <>
     <div className='sideMenuContainer'>
     <div className='sidemenu'><SideMenu/></div>
     <div className='sidemenu'><CreateVacency/></div>

     </div>
   </>
  )
}

export default AdminDashboard