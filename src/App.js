import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import WhatIDo from './Components/WhatIDo/WhatIDo';
import Achieve from './Components/Achieve/Achieve';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <WhatIDo/>
      <Achieve/>
      <Blog/>
      <Projects/>
    </>
  );
}

export default App;
