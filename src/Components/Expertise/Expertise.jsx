import React from 'react'
import './Expertise.css'
import { FaJsSquare, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from "react-icons/si";
const Expertise = () => {

    const cardIcon =[
        {
            icon: <FaReact size={30} style={{verticalAlign:'middle',  marginRight:'8px' , color:'#61DAFB'}}/>,
            title: 'ReactJs',
            collections: ['Hooks', 'Redux', 'Context API' ,' React Router']
        },
        {
           icon: <SiTailwindcss size={30} style={{verticalAlign:'middle', marginRight:'8px', color:'#38BDF8'}}/>,
        title: 'Tailwind CSS',
        collections: ['Responsive Design', 'Custom Theme', 'Components', 'Animations']
        },
        {
            icon:<FaJsSquare size={30} style={{verticalAlign:'middle', marginRight:'8px', color:'#F7DF1E'}}/>,
            title:'JavaScript',
            collections: ['ES6+', 'DOM Manipulation', 'Async/Await', 'APIs']
        }
    ]
  return (
    <section className='skills'>
        <div className="skills-content">
            <h1><span className='dev'>Skills</span> & Expertise</h1>
            <p>Crafting modern, performant, and user-friendly web experiences</p>
        </div>
        <div className="ex">
            <div className='exp'>
            <h3>Frontend</h3>
        <div className="expertise">
            {cardIcon.map(({icon , title ,collections} , idx)=>(
      <div className="card" key={idx}>
            <div className="card-content">
               <h1>{icon}{title}</h1>
               <div className="collections">
                {collections.map((item , i)=>(
      <span key={i}>{item}</span>
                ))}
                
               </div>
            </div>
        </div> 
            ))} 
           
        
           </div>
        </div>
        </div>
    </section>
  )
}

export default Expertise