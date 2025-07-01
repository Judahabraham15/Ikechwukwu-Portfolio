import React from 'react'
import './Sidebar.css'
import { RxCross2 } from 'react-icons/rx'
const Sidebar = () => {
    const hideSidebar = (e) => { 
        e.preventDefault();
        const sidebar = document.querySelector('.sidebar')
        sidebar.classList.remove('open')
        sidebar.style.display = "block"
     }
  return (
    <div className='sidebar'>
        <div className="sides">
            <RxCross2 color='white' size={20} onClick={hideSidebar}/>
        </div>
       <ul className="side-links">
       <a href='#about'></a> <li>About</li>
       <a href='#skills'></a> <li>Skills</li>
       <a href='#experience'></a> <li>Experience</li>
       <a href='#projects'></a> <li>Projects</li>
       <a href='#contact'></a> <li>Contact</li>
       </ul>
    </div>
  )
}

export default Sidebar