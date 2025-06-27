import React from 'react'
import './Projects.css'
import lingo from '../../assets/lingo.png'
import ik from '../../assets/ik.png'
import { FaReact , FaJs} from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import life from '../../assets/life.png'
import { SiTailwindcss } from 'react-icons/si'
import { motion } from 'framer-motion'

const Projects = () => {
    const categories = [
        { title: "Lingo App", desc: 'A slangs App that gives you access to 100+ slangs over 3 Different languages', img: lingo, link: 'https://ik-lingo.vercel.app/', icons: [<FaReact color='#1a1a1a' />, <FaJs color='#1a1a1a' />, <SiTailwindcss color='#1a1a1a' />] },
        { title: 'IK-LIFE', desc: 'A website for a pharmacy that provides information about the pharmacy, its services, and contact details.', img: life, icons: [<FaReact color='#1a1a1a' />, <FaJs color='#1a1a1a' />, <SiTailwindcss color='#1a1a1a' />], link: 'https://ik-life.vercel.app/' },
        { title: 'Health WebApp', desc: 'A health centered website that provides users with ailments when they input the symptoms.', img: ik, icons: [<FaReact color='#1a1a1a' />, <FaJs color='#1a1a1a' />, <SiTailwindcss color='#1a1a1a' />], link: 'https://i-kechukwucheck-r5cq.vercel.app/' },
        { title: 'Income Tracker App', desc: 'A website that help uses track their daily income and expense', img:ik,icons: [<FaReact color='#1a1a1a' />, <FaJs color='#1a1a1a' />, <SiTailwindcss color='#1a1a1a' />], link: 'https://i-kechukwucheck.vercel.app/' }
    ];

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 }
    };

    return (
        <div className='projects'>
            <motion.div
                className="projects-text"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h1> <span className='dev'>Featured</span> Projects</h1>
                <p className='pp'>Some of my featured works</p>
            </motion.div>
            <div className="projects-wrap">
                <div className="projects-grid">
                    {categories.map(({ title, desc, link, img, icons }, idx) => (
                        <motion.div
                            className="cards"
                            key={idx}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(14,165,233,0.18)" }}
                        >
                            <div className="img-src">
                                {img ? (
                                    <motion.img
                                        src={img}
                                        alt="pp"
                                        className='img-blink'
                                        whileHover={{ scale: 1.08, rotate: 2 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    />
                                ) : (
                                    <div style={{ width: "100%", height: "120px", background: "#e5e7eb", borderRadius: "8px" }} />
                                )}
                            </div>
                            <div className="card-text">
                                <h1 className='dev'>{title}</h1>
                                <p>{desc}</p>
                                <div className="icons-tag">
                                    {icons.map((iconss, i) => (
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects