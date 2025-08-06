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
      <img src={logo} alt=''/>
      <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' offset={120} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={60} href='#about'><p onClick={()=>setMenu("About Me")}>About</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Education'><p onClick={()=>setMenu("Education")}>Education</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Skills'><p onClick={()=>setMenu("Skills")}>Skills</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Experience'><p onClick={()=>setMenu("Experience")}>Experience</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Projects'><p onClick={()=>setMenu("Projects")}>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Certification'><p onClick={()=>setMenu("Certification")}>Certifications</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Contact'><p onClick={()=>setMenu("Contact")}>Contact</p></AnchorLink></li>      
      </ul>
    </div>
    );
};
export default Navbar;