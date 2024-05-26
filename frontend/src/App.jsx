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
