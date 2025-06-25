import React from 'react'
import './Button.css'


const Button = ({ title, style, className, icon }) => {
  return (
    <div className='btn'>
      <button
        className={`button ${className}`}
        style={{ ...style }}
      >
      <p>{title}</p>
        <div className="icon">
         
        </div>
      </button>
    </div>
  )
}

export default Button