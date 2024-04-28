// App.js

import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import AboutMe from './components/Aboutme';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Workshop from './components/workshop';




function App() {
  return (
    <div>
      <Navbar/>
      
      <Home/>
      <AboutMe/>
      <TechStack/>
      <Projects/>
      <Workshop/>
      

     
      
     
    </div>
  );
}

export default App;
