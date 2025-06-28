import React from 'react'
import './Navbar.css'
import { useState , useEffect } from 'react'
import {  TbMenuDeep } from "react-icons/tb";
const Navbar = () => {
  const[scrolled , setScrolled] = useState(false);
  useEffect(()=>{
     const HandleScroll = () => { 
    setScrolled(window.scrollY > 80)
  }
  window.addEventListener('scroll' , HandleScroll)
  return () => window.removeEventListener('scroll', HandleScroll);
  } , [])
 
     return (
    <nav className={`nav ${scrolled ? 'nav-scroll' : ''}`}>
      <h1 className=' nav-header'>Dev<span className="dev">Chuks</span></h1>
      <ul className="nav-links">
        <TbMenuDeep color='white' size={25}/>
        <li className='HideonMobile'><a href="#about">About</a></li>
        <li className='HideonMobile'><a href='#skills'> Skills</a></li>
        <li className='HideonMobile'><a href="#experience">Experience</a></li>
        <li className='HideonMobile'><a href="#projects">Projects</a></li>
        <li className='HideonMobile'><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar