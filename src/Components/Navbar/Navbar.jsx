import React, { useState,useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';


const Navbar = () => {

    const [menu,setMenu]=useState("home");
    const menuRef = useRef();

    const openMenu = ()=> {
    menuRef.current.style.right="0";
  }
    const closeMenu = ()=> {
    menuRef.current.style.right="-350px";
  }
  return(
    <div id='navbar' className="navbar">
      <img src={logo} alt='logo'/>
      <img src={menu_open} onClick={openMenu} alt='Open Menu' className='nav-mob-open' style={{ width: "30px", height: "30px" }}/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" style={{ width: "30px", height: "30px" }}/>
        <li><AnchorLink className='anchor-link' offset={120} href='#home'><p onClick={()=>{ setMenu("home"); closeMenu(); }}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={60} href='#about'><p onClick={()=>{ setMenu("About me"); closeMenu(); }}>About</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Education'><p onClick={()=>{ setMenu("Education"); closeMenu(); }}>Education</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Skills'><p onClick={()=>{ setMenu("Skills"); closeMenu(); }}>Skills</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Experience'><p onClick={()=>{ setMenu("Experience"); closeMenu(); }}>Experience</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Projects'><p onClick={()=>{ setMenu("Projects"); closeMenu(); }}>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Certification'><p onClick={()=>{ setMenu("Certifications"); closeMenu(); }}>Certifications</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Contact'><p onClick={()=>{ setMenu("Contact"); closeMenu(); }}>Contact</p></AnchorLink></li>      
      </ul>
    </div>
    );
};
export default Navbar;