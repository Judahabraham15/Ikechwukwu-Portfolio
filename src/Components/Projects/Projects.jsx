import React from 'react'
import './Projects.css'
import lingo from '../../assets/lingo.png'
import { FaReact , FaJs} from 'react-icons/fa'
import {TbWorldWww} from 'react-icons/tb'
import life from '../../assets/life.png'
import { SiTailwindcss } from 'react-icons/si'
import { link } from 'framer-motion/client'

const Projects = () => {
    const categories =[
        {   title: "Lingo App" , 
            desc : 'A slangs App that gives you access to 100+ slangs over 3 Different languages' , 
            img:lingo ,link:'https://ik-lingo.vercel.app/' , 
            icons :[<FaReact color='#1a1a1a'/> , <FaJs color='#1a1a1a'/> , <SiTailwindcss color='#1a1a1a'/>] 
        },
        {
            title:'IK-LIFE' ,
            desc:'A website for a pharmacy that provides information about the pharmacy, its services, and contact details.' ,
            img: life ,
            icons:[<FaReact color='#1a1a1a'/> , <FaJs color='#1a1a1a'/> , <SiTailwindcss color='#1a1a1a'/>] ,
            link:'https://ik-life.vercel.app/'
        },
        {
            title:'Health WebApp', 
            desc:'A health centered website that provides users with ailments when they input the symptoms.',
            img:'',
            icons: [<FaReact color='#1a1a1a'/> , <FaJs color='#1a1a1a'/> , <SiTailwindcss color='#1a1a1a'/>],
            link:'https://i-kechukwucheck-r5cq.vercel.app/'
        },
        {
            title:'Income Tracker App' ,
            desc:'A website that help uses track their daily income and expense',
            icons:[<FaReact color='#1a1a1a'/> , <FaJs color='#1a1a1a'/> , <SiTailwindcss color='#1a1a1a'/>],
            link:'https://i-kechukwucheck.vercel.app/'
        }
    ]
  return (
    <div className='projects'>
        <div className="projects-text">
            <h1> <span className='dev'>Featured</span> Projects</h1>
            <p className='pp'>Some of my featured works</p>
        </div>
        <div className="projects-wrap">
             <div className="projects-grid">
                {categories .map(({title , desc , link , img , icons } , idx)=>(
                    <div className="cards" key={idx}>
                        <div className="img-src">
                            <img src={img} alt="pp" className='img-blink'/>
                        </div>
                        <div className="card-text">
                            <h1 className='dev'>{title}</h1>
                            <p>{desc}</p>
                            <div className="icons-tag">
                                {icons.map((iconss , i)=>(
                                    <span key={i}>{iconss}</span>
                                ))}
                                </div>
                                 <div className="live">
                    {link && (
                      <>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                          <TbWorldWww color="#1a1a1a" className='preview' />
                        </a>
                        <p>Live Preview</p>
                      </>
                    )}
              
                     </div>
                        </div>
                    </div>
                ))}
        </div>
        </div>
       
    </div>
  )
}

export default Projects