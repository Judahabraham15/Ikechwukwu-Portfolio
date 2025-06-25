import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='nav'>
      <h1 className=' nav-header'>Dev<span className="dev">Chuks</span></h1>
      <ul className="nav-links">
        <li className='HideonMobile'><a href="#about">About</a></li>
           <li className='HideonMobile'><a href="#qualifications">Experience</a></li>
        <li className='HideonMobile'><a href='#skills'> Skills</a></li>
        <li className='HideonMobile'><a href="#projects">Projects</a></li>
        <li className='HideonMobile'><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar