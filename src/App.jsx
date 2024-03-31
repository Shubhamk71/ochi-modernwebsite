import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Features2 from './components/Features2'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Features/>
      <Features2/>
      <Cards/>
      <Footer/>
      
    </div>
  )
}

export default App