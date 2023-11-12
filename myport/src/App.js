// App.js

import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import AboutMe from './components/Aboutme';
import TechStack from './components/TechStack';
import Projects from './components/Projects';




function App() {
  return (
    <div>
      <Navbar/>
      
      <Home/>

      <AboutMe/>
      <TechStack/>
      <Projects/>
      

     
      
     
    </div>
  );
}

export default App;
