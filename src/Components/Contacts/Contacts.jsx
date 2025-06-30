import React, { useState, useRef } from 'react'
import './Contacts .css'
import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiMail, FiSend } from 'react-icons/fi'
import { RiTwitterXFill } from 'react-icons/ri'
import emailjs from '@emailjs/browser'
import { UserSchema } from '../../Validation/Validations'
import { HiBadgeCheck } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Contacts = () => {

    const buttons = [
        {
            icon: <FiGithub size={20} style={{ verticalAlign: 'middle', marginRight: '5px' }} />,
            text: 'GitHub',
            link: 'https://github.com/Ikechukwu001'
        },
        {
            icon: <FaWhatsapp size={20} style={{ verticalAlign: 'middle', marginRight: '5px' }} />,
            text: 'WhatsApp',
            link:'https://wa.me/2348157902426'
        },
        {
            icon: <RiTwitterXFill size={20} style={{ verticalAlign: 'middle', marginRight: '5px' }} />,
            text: 'X',
            link: 'https://twitter.com/Ikechukwu001'
        },
        {
            icon: <FiMail size={20} style={{ verticalAlign: 'middle', marginRight: '5px' }} />,
            text: 'Email',
            link: 'mailto:Michaeljustice727@gmail.com'
        },
    ]

    const [errors, setErrors] = useState({})
    const [showpopup, setShowpopup] = useState(false)
    const nameRef = useRef()
    const emailRef = useRef()
    const textareaRef = useRef()
    const form = useRef();

    async function handleSubmit(e) {
        e.preventDefault();

        const name = nameRef.current;
        const email = emailRef.current;
        const textarea = textareaRef.current;

        const newErrors = {};

        if (name.value === '') {
            newErrors.name = 'Name is required';
            name.style.border = '2px solid red';
        } else {
            name.style.border = '2px solid green';
        }

        if (email.value === '') {
            newErrors.email = 'Email is required';
            email.style.border = '2px solid red';
        } else {
            email.style.border = '2px solid green';
        }

        if (textarea.value === '') {
            newErrors.textarea = 'Message is required';
            textarea.style.border = '2px solid red';
        } else {
            textarea.style.border = '2px solid green';
        }

        const formData = {
            name: name.value,
            email: email.value,
        };

        await UserSchema.validate(formData, { abortEarly: false })
            .then(() => {
                if (Object.keys(newErrors).length === 0) {
                    sendEmail(e);
                }
            })
            .catch((err) => {
                err.inner.forEach((e) => {
                    newErrors[e.path] = e.message;
                    if (e.path === 'email') {
                        email.style.border = '2px solid red';
                    }
                    if (e.path === 'name') {
                        name.style.border = '2px solid red';
                    }
                });
            });

        setErrors(newErrors);
    }

    const sendEmail = () => {
        emailjs.sendForm('service_cw1p62x', 'template_ndd128c', form.current, {
            publicKey: 'YeG9ZY2MBXEiggqbK',
        })
            .then(() => {
                setShowpopup(true);
                form.current.reset();
                setTimeout(() => {
                    setShowpopup(false);
                }, 3000);
                console.log('SUCCESS!')
            })
            .catch((error) => {
                console.log('FAILED...', error.text);
            });
    };

    // Framer Motion variants
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
    };
   const iconVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -30 },
    show: { scale: 1, opacity: 1, rotate: 0, transition: { type: "spring", stiffness: 200, damping: 10 } },
    hover: { scale: 1.2, rotate: 10, transition: { type: "spring", stiffness: 300 } }
  };

    return (
        <div className='contacts' id='contact'>
            <motion.div
                className="contact-text"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h1><span className='dev'>Let's</span> Connect</h1>
                <p> Whether you have a project in mind or just want to say hi, I'd love to hear.</p>
            </motion.div>
            <div className="contacts-grid">
                <motion.div
                    className="first-section"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.h1 variants={itemVariants}><span className="dev">Find</span> Me Online</motion.h1>
                    <motion.p className='apple' variants={itemVariants}>Let's collaborate or chat-reach me across any of these platforms</motion.p>
                    <motion.div className="social" variants={containerVariants}>
                        {buttons.map(({ icon, text, link }, idx) => (
                            <motion.a
                                href={link}
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ scale: 1.08, boxShadow: "0 4px 16px rgba(14,165,233,0.18)" , rotate: 2 }}
                                style={{ textDecoration: "none" }}
                                target='_blank'
                            >
                                <button>{icon}{text}</button>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
                <div
                    className="input-section"
                >
                    <h2>Let's Collaborate.</h2>
                    <motion.form
                        className='contact-form'
                        onSubmit={handleSubmit}
                        noValidate
                        ref={form}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="contact-forms">
                            <input type='text' id='name' name="name" ref={nameRef} className='inputs' placeholder='Your Full Name' />
                            {errors.name && <span className="error-mess">{errors.name}</span>}
                        </div>
                        <div className="contact-forms">
                            <input type='email' placeholder='Email Address' name='email' ref={emailRef} className='inputs' id='email' />
                            {errors.email && <span className='error-mess'> {errors.email}</span>}
                        </div>
                        <div className="contact-forms">
                            <textarea placeholder='Tell me about your project or how I can help...' name='message' ref={textareaRef} className='text-area' id='message'></textarea>
                            {errors.textarea && <span className='error-mess'> {errors.textarea}</span>}
                        </div>
                        <motion.button
                            className='text-btn'
                            type='submit'
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            Send Message
                            <motion.span variants={iconVariants} whileHover="hover">
                                <FiSend color='black' size={20} style={{ display: "inline-flex", marginLeft: 5, verticalAlign: "middle" }} />
                            </motion.span>
                        </motion.button>
                    </motion.form>
                </div>
            </div>
            {showpopup &&
                <motion.div
                    className='popup'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.div
                        className="popup-card"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <HiBadgeCheck size={18} color="black" style={{ verticalAlign: "middle", marginRight: '5px' }} />
                        Message Sent!💙
                    </motion.div>
                </motion.div>
            }
        </div>
    )
}

export default Contacts