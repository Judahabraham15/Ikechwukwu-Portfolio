import React from 'react'
import { motion } from 'framer-motion'
import './Bio.css'
import pic from '../../assets/ike.jpg'
import { FiDownload } from 'react-icons/fi'
import { FaReact, FaCapsules, FaUserMd , FaHeartbeat , FaBug , FaPrescriptionBottle, FaBandAid } from 'react-icons/fa'

const bgIcons = [
  { icon: <FaReact />, style: { top: '10%', left: '5%', fontSize: 40, color: '#0ea5e9', opacity: 0.20 } },
  { icon: <FaCapsules />, style: { top: '80%', left: '10%', fontSize: 32, color: '#0ea5e9', opacity: 0.20 } },
  { icon: <FaUserMd />, style: { top: '50%', right: '5%', fontSize: 36, color: '#0ea5e9', opacity: 0.20 } },
  { icon: <FaHeartbeat />, style: { top: '20%', right: '15%', fontSize: 44, color: '#0ea5e9', opacity: 0.20 } },
  { icon: <FaBug />, style: { bottom: '15%', left: '20%', fontSize: 36, color: '#0ea5e9', opacity: 0.20 } },
  { icon: <FaPrescriptionBottle />, style: { top: '60%', right: '20%', fontSize: 38, color: '#0ea5e9', opacity: 0.20 } },
  { icon: <FaBandAid />, style: { bottom: '10%', right: '10%', fontSize: 32, color: '#0ea5e9', opacity: 0.20 } },
];

const cores = [
  { num:'1+', text: 'Years of Experience' },
  { num: '5+', text:'Projects Completed' },
  { num:'2+' , text:'Happy Clients' },
  { num:'5+', text:'Technologies' }
];

const Bio = () => {

  return (
    <motion.div 
      className='bio'
      id='about'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Animated background icons */}
      {bgIcons.map(({ icon, style }, idx) => (
        <motion.div
          key={idx}
          style={{ position: 'absolute', zIndex: 0, ...style }}
          animate={{
            y: [0, -20, 0, 20, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 8 + idx * 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: idx * 0.5
          }}
        >
          {icon}
        </motion.div>
      ))}

      <div className="image-content" style={{ zIndex: 1 }}>
        <motion.img
          src={pic}
          alt='Ikechukuw'
          className='img'
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.07, rotate: -3 }}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="bio-content" style={{ zIndex: 1 }}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          About Me.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          I'm a certified health professional turned tech enthusiast—think of me as your friendly neighborhood code pharmacist, dispensing clean code instead of capsules.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          While I’ve got a background in health (yes, I can read medical terms and JavaScript errors without breaking a sweat), my heart now beats in React rhythms and JavaScript loops. I'm passionate about building intuitive, user-focused web applications that not only looks good but function like a well-oiled immune system—fast, reliable, and bug-free.
        </motion.p>
        <br />
        <motion.div
          className="core-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {cores.map(({ num, text }, idx) => (
            <motion.div
              className="coress"
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <span className='dev'>{num}</span>
              <p>{text}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="btn-contains"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <button className='but'>
            <motion.span
            whileHover={{ rotate: 10, scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 200 }}
            style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }}
          >
            <FiDownload color='white' size={18} />
          </motion.span>
            Download Resume
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Bio