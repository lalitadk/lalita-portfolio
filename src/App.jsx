import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Footer from './Components/Footer/Footer'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import Certification from './Components/Certification/Certification'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Certification/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App