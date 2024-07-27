// App.js

import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import AboutMe from './components/Aboutme';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
// import Workshop from './components/workshop';
import Achievements from './components/achievements';
import RectangularBox from './components/resume';
// import CustomCursor from './components/cursor';
import Footer from './components/footer';




function App() {
  return (
    <div>
      <Navbar/>
      
      <Home/>
      <AboutMe/>
      <TechStack/>
      <Projects/>
      {/* <Workshop/> */}
      <Achievements/>
      <RectangularBox/>
      {/* <CustomCursor/> */}
      <Footer/> 
    </div>
  );
}

export default App;
