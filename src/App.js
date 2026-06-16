import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './Routes/About';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Service from './Routes/Service';


function App() {
 
  return (
    
     <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Service/>} />
      </Routes>
     </Router>
  )
}

export default App
