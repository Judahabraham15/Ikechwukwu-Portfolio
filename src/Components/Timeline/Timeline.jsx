import {  useState } from 'react'
import './Timeline.css'
import { FaCode,FaLaptopCode, FaReact, FaUserFriends , FaSchool , FaRegCalendarAlt} from 'react-icons/fa'
import { FaGraduationCap , FaBriefcase} from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import { motion } from 'framer-motion'
import { text } from 'framer-motion/client';


const Timeline = () => {
      const Timelines = [
    { title: "Started Coding", desc: "Began my coding journey in 2024, learning HTML and CSS.", side: "left", icon: <FaCode color="#0ea5e9" />},
    { title: "Web Developer", desc: "Freelance", side: "right", icon: <FaLaptopCode color="#0ea5e9"/> , icons:<FaRegCalendarAlt color='grey'size={20}/>, text: '2024- Present'},
    { title: "React Developer", desc: "Dove into React.js for modern UI development.", side: "left", icon: <FaReact color="#0ea5e9" />, icons:<FaRegCalendarAlt color='grey' size={20}/>, text: '2025 - Present'},
    { title: "Freelancing", desc: "Yet to take collaborative Jobs.", side: "right", icon: <FaUserFriends color="#0ea5e9" /> }
  ];
  const Education = [
 { title: "Secondary School", desc: "ExtraPoint Model School", side: "left", icon: <FaSchool color="#0ea5e9" /> , icons:<FaRegCalendarAlt color='grey' size={20}/> , text:'2011 - 2017'},
    {title:"B.sc Pharmacy" , desc :"Madonna University" , side: 'right' , icon: <MdLocalPharmacy color="#0ea5e9" /> , icons:<FaRegCalendarAlt color='grey' size={20}/> , text:'2018 - 2024'},
    { title: "Web Development", desc: 'Learning and Practicing' ,side: "left", icon: <FaLaptopCode color="#0ea5e9" /> , text:'2024 - Present' , icons:<FaRegCalendarAlt color='grey' size={20}/>  },
    { title: "React Development", desc: "Learning and practicing", side: "right", icon: <FaReact color="#0ea5e9" /> , text:'2025 -Present' , icons:<FaRegCalendarAlt color='grey' size={20}/> }
];

  
  const dotPositions = ['7.5%', '33%', '59%', '86%'];
const[activeTab , setActiveTab] = useState('Experience')
  return (
    <div className='container' id='experience'>
      <motion.div
        className="time-line"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        <h1><span className='dev'>Experience</span> & Education</h1>
        <p>My professional journey and academic background</p>
        <div className="time-btn">
            <button onClick={() => setActiveTab('Experience')} className={activeTab === "Experience" ? "active" : ""}><FaBriefcase size={18} style={{verticalAlign:'middle' , marginRight:'8px'}}/>Experience</button>
           <button onClick={() => setActiveTab('Education')} className={activeTab === "Education" ? "active" : ""}><FaGraduationCap size={18} style ={{ verticalAlign:'middle' , marginRight:'8px'}}/>Education</button>
        </div>
      </motion.div>
      <div className="timeline" style={{ position: 'relative' }}>
        {activeTab === 'Experience' &&(
            <motion.div
          className="timeline-vertical"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        />
        )}
        {activeTab === 'Education' && (
                <motion.div
          className="timeline-vertical"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        />
        )}
        {dotPositions.map((top, idx) => (
          <motion.div
            className={`timeline-dot dot${idx + 1}`}
            key={idx}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 + idx * 0.15, type: "spring" }}
            viewport={{ once: true }}
            style={{ top }}
          />
        ))}
        <div className="timeline-contain">
{(activeTab === 'Experience' ? Timelines : Education).map(({ title, desc, side, icon, text, icons }, idx) => (
            <motion.div
              className={`timeline-item ${side}`}
              key={idx}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.2 + idx * 0.18 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.04, boxShadow: "0 4px 24px rgba(33,136,56,0.13)" }}
            >
              <h2>
                <span style={{ marginRight: 8, verticalAlign: 'middle' }}>{icon}</span>
                {title}
              </h2>
              <p>{desc}</p>
              <div className="div" style={{margin:'0'}}>
               <span className='ic'>{icons}</span>
               <p style={{fontSize:"18px" , color:'grey', margin:'0'}} className='tit'>{text}</p>
              </div>
              
            </motion.div>
          ))}
        
        
        </div>
      </div>
    </div>
  )
}

export default Timeline