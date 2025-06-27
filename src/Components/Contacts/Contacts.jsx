import React from 'react'
import  './Contacts .css'
import { FaWhatsapp } from 'react-icons/fa';
import { FiGithub  , FiMail} from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';

const Contacts = () => {

    const buttons = [
        {
         icon:<FiGithub size={20} style={{verticalAlign:'middle' , marginRight:'5px'}}/>,
         text:'GitHub',
         link:'https://github.com/Ikechukwu001'
        },
        {
            icon:<FaWhatsapp size={20} style={{verticalAlign:'middle' , marginRight:'5px'}}/>,
            text:'WhatsApp'
        },
        {
            icon:<RiTwitterXFill size={20} style={{verticalAlign:'middle' , marginRight:'5px'}}/>,
            text:'X',
            link:'https://twitter.com/Ikechukwu001'
        },
          {
            icon:<FiMail size={20} style={{verticalAlign:'middle' , marginRight:'5px'}}/>,
            text:'Email',
            link:'mailto:Michaeljustice727@gmail.com'
        },
    ]
  return (
    <div className='contacts'>
        <div className="contact-text">
            <h1><span className='dev'>Let's</span> Connect</h1>
            <p> Whether you have a project in mind or just want to say hi, I'd love to hear.</p>
        </div>
        <div className="contacts-grid">
            <div className="first-section">
                <h1>Find Me Online</h1>
                <p className='apple'>Let's collaborate or chat-reach me across any of these platforms</p>
                
                    <div className="social">
                        {buttons.map(({icon , text , link} , idx)=>(
                   <a href={link} key={idx}><button>{icon}{text}</button></a>
                ))}
                </div>
            </div>
            <div className="input-section">
                <h2>Let's Collaborate.</h2>
                <form className='contact-form'>
                    <div className="contact-forms">
                           <input type='text' placeholder='Full Name' required/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contacts