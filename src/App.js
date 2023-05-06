
import './App.css';
import React from 'react';
import Home from './components/Home';
import Service from './services/services';
import About from './About/about';
import Contact from './contact/contact';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {
  return (
   <div >
    <Router>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='services' element={<Service/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
