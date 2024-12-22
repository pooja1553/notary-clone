import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import PracticeArea from './Components/PracticeArea';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import OurTeams from './Components/OurTeams';
import Contact from './Components/Contact';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/practice' element={<PracticeArea/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>

   {/* <OurTeams/> */}
    </>
  )
}

export default App;
