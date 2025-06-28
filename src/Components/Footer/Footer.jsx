import React from 'react'
import './Footer.css'
import { BiCodeAlt } from 'react-icons/bi'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.div
      className='footer'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        @2025 <span className="dev">Ikechukwu </span>, All Rights Reserved
      </motion.p>
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p>
          <motion.span
            whileHover={{ rotate: 20, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: "inline-block" }}
          >
            <BiCodeAlt size={23} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
          </motion.span>
          Devised by Judah <span className="dev">Abraham</span>. (Just  a guy with a laptop).
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Footer