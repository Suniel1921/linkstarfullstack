// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './layout/Layout';
// import About from './pages/about/About';
// import Contact from './pages/contact/Contact';
// import Home from './pages/home/Home';
// import WhyUs from './components/whyUs/WhyUs';
// import toast, { Toaster } from 'react-hot-toast';
// import Vacency from './components/vacency/Vacency';
// import AdminDashboard from './components/admin/AdminDashboard';
// import CreateVacency from './components/admin/CreateVacency';
// import DropdownData from './components/dropdown/DropdownData';


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path='about' element={<About />} />
//           <Route path='contact' element={<Contact />} />
//           <Route path='/why-us' element={<WhyUs/>}/>
//           <Route path='/vacency' element={<Vacency/>}/>
//           <Route path='/our-company/chairperson' element={<DropdownData heading='iam from prop data' para = 'paragraph goes here'/>}/>
//           <Route path='/our-company/managing-director' element={<DropdownData heading='iam from managing director' para = 'paragraph goes here'/>}/>
//           <Route path='/our-company/executive-director' element={<DropdownData heading='iam from executive director' para = 'paragraph goes here'/>}/>
          

//           <Route path='/dashboard/admin' element={<AdminDashboard/>}>
//           <Route path='/dashboard/admin/createVacency' element={<CreateVacency/>}/>
            
//           </Route>
//         </Route>
//       </Routes>
//       <Toaster />
//     </Router>
//   );
// }

// export default App;






import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import WhyUs from './components/whyUs/WhyUs';
import toast, { Toaster } from 'react-hot-toast';
import Vacency from './components/vacency/Vacency';
import AdminDashboard from './components/admin/AdminDashboard';
import CreateVacency from './components/admin/CreateVacency';
import DropdownData from './components/dropdown/DropdownData';
import ApplyNow from './components/applynow/ApplyNow';

// Data for DropdownData components
const dropdownData = [
  { path: '/our-company/chairperson', heading: 'iam from prop data', para: 'paragraph goes here' },
  { path: '/our-company/managing-director', heading: 'iam from managing director', para: 'paragraph goes here' },
  { path: '/our-company/executive-director', heading: 'iam from executive director', para: 'paragraph goes here' }
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/why-us' element={<WhyUs/>}/>
          <Route path='/vacency' element={<Vacency/>}/>
          <Route path='/apply-now' element={<ApplyNow/>}/>

          {/* Render DropdownData components */}
          {dropdownData.map(({ path, heading, para }) => (
            <Route key={path} path={path} element={<DropdownData heading={heading} para={para} />} />
          ))}

          <Route path='/dashboard/admin' element={<AdminDashboard/>}>
            <Route path='/dashboard/admin/createVacency' element={<CreateVacency/>}/>
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
