import React from 'react'
import { motion } from 'framer-motion'
import './Button.css'


const Button = ({ title, style, className, icon }) => {
  return (
    <div className='btn'>
      <motion.button
        className={`button ${className}`}
        style={{ ...style }}
        initial="rest"
        animate="rest"
        whileHover="hover"
              >
      <p>{title}</p>
    <div className="icon">
         { icon ? (icon) : null}
        </div>
      </motion.button>
    </div>
  )
}

export default Button