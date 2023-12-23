import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Service1 from './pages/services/Service1';
import Service2 from './pages/services/Service2';
import Service3 from './pages/services/Service3';

import './css/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout> <Home /> </Layout>} />
        <Route path='/contact' element={<Layout> <Contact /> </Layout>} />
        <Route path='/aboutus' element={<Layout> <AboutUs /> </Layout>} />
        <Route path='/Maintenance_Optimisation_Installations' element={<Layout> <Service1 /> </Layout>} />
        <Route path='/Gestion_technique_locaux_Biens' element={<Layout> <Service2 /> </Layout>} />
        <Route path='/Conseil_Audit_Technique' element={<Layout> <Service3 /> </Layout>} />
      </Routes>
    </Router>
);
}

export default App;
