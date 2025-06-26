import React from 'react'
import './Bio.css'
import react from '../../assets/react.svg'
import pic from '../../assets/pics.jpg'

const Bio = () => {
  return (
    <div className='bio'>
        <div className="image-content">
     <img src={pic} alt='Ikechukuw' className='img'/>
        </div>
        <div className="bio-content">
            <h1>About Me.</h1>
            <p>I'm a frontend heavy Software Developer with 4 years of experience in web development.

Currently developing enterprise-level applications using React, Next.js, and TypeScript. Strong focus on UI/UX implementation, component architecture, and performance optimization.</p>
<br/>
<p></p>
        </div>
      
    </div>
  )
}

export default Bio