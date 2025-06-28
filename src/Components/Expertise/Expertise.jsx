import React from 'react'
import './Expertise.css'
import { FaJsSquare, FaReact , FaTools } from 'react-icons/fa'
import { FaGlobe } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { MdOutlineBugReport } from "react-icons/md";
import { motion } from 'framer-motion'

const cardIcon = [
    {
        icon: <FaReact size={30} style={{verticalAlign:'middle',  marginRight:'8px' , color:'#61DAFB'}}/>,
        title: 'ReactJs',
        collections: ['Hooks', 'Redux', 'Context API' ,' React Router']
    },
    {
        icon: <SiTailwindcss size={30} style={{verticalAlign:'middle', marginRight:'8px', color:'#38BDF8'}}/>,
        title: 'Tailwind CSS',
        collections: ['Responsive Design', 'Custom Theme', 'Components']
    },
    {
        icon:<FaJsSquare size={30} style={{verticalAlign:'middle', marginRight:'8px', color:'#F7DF1E'}}/>,
        title:'JavaScript',
        collections: ['ES6+', 'DOM Manipulation', 'Async/Await', 'APIs']
    },
    {
        icon:<FaGlobe size={25} style={{verticalAlign:'middle', marginRight:'8px', color:'#0ea5e9'}} />,
        title:'Web Standards',
        collections:['HTML5' , 'CSS', 'Accessiblity' ,'Performance']
    }
]
const cardIcons = [
    {
    icon: <FaTools size={25} style={{verticalAlign:'middle', marginRight:'8px', color:'#FBBF24'}}/>,
    title: 'Development Tools',
    collection: ['Git', 'Vs Code', 'Vite', ' jsPDF', 'NPM']
    },
    {
        icon: <MdOutlineBugReport size={28} style={{verticalAlign:'middle', marginRight:'8px', color:'#EF4444'}}/>,
        title: 'Testing & Debugging',
        collection: ['Jest', 'React Testing Library', 'Chrome DevTools', 'Postman']
    }
]

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

const iconHover = {
  scale: 1.25,
  rotate: 12,
  transition: { type: "spring", stiffness: 300 }
};

const Expertise = () => {
  return (
    <section className='skills' id='skills'>
      <motion.div
        className="skills-content"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1>
          <span className='dev'>Skills</span> & Expertise
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Crafting modern, performant, and user-friendly web experiences
        </motion.p>
      </motion.div>

      <div className="ex">
        <div className='exp'>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Frontend
          </motion.h3>
          <div className="expertise">
            {cardIcon.map(({icon, title, collections}, idx) => (
              <motion.div
                className="card"
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="card-content">
                  <motion.h1
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <motion.span whileHover={iconHover}>{icon}</motion.span>
                    {title}
                  </motion.h1>
                  <div className="collections">
                    {collections.map((item, i) => (
                      <span key={i}>{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="exs">
        <div className='exp'>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Tools
          </motion.h3>
          <div className="expertise">
            {cardIcons.map(({icon, title, collection}, idx) => (
              <motion.div
                className="card"
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="card-content">
                  <motion.h1
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <motion.span whileHover={iconHover}>{icon}</motion.span>
                    {title}
                  </motion.h1>
                  <div className="collections">
                    {collection.map((item, is) => (
                      <span key={is}>{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise