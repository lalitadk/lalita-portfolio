import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.jpg';
import { Typewriter } from 'react-simple-typewriter';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import lalita_resume from '../../assets/lalita_resume.pdf'

const Hero = () => {
  return(
    <div id='home' className='hero'>
      <img src={profile} alt="profile"/>
      <h1><span>Hello,I'm lalita Kshirsagar</span></h1>
      <h2 className="animated-role">
        I am a{' '}
        <span style={{ color: '#00ffff', fontWeight: 'bold' }}>
          <Typewriter
            words={['Frontend Developer', 'Backend Developer', 'Fullstack Developer']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#Contact'>connect with me</AnchorLink></div>
        <div className="hero-resume">
          <a href={lalita_resume} download="lalita_Resume.pdf">My resume</a>
        </div>    
      </div>
    </div>
  )
}

export default Hero;