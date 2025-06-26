import React from 'react'
import { motion , useScroll , useSpring , useTransform} from 'framer-motion'
import { useEffect , useRef  } from 'react'
import { FaGithub, FaLinkedin, FaTwitter , FaWhatsapp , FaCapsules , FaPrescriptionBottle , FaPills , FaReact ,FaCogs , FaBug , FaUserMd , FaTerminal,   FaHeartbeat, FaBriefcaseMedical,
  FaSyringe,
  FaBandAid} from 'react-icons/fa'
  import { PiFlowArrowBold } from 'react-icons/pi'
import './Hero.css'
import Button from '../Button/Button'

const Hero = () => {

    useEffect(()=>{
        const textElement = document.getElementById('ChangedText');
        const textArray = ['Pharmacist' , 'React Developer', 'Frontend Engineer'];
        let index = 0;
       const ChangeText = () => {
      textElement.style.opacity = 0;
      setTimeout(() => {
        textElement.textContent = textArray[index];
        index = (index + 1) % textArray.length
        textElement.style.opacity = 1;
        textElement.style.color = 'rgb(14 165 233)';
      }, 500)
    }
    const interval = setInterval(() => {
      ChangeText()
    }, 2000)
    return () => clearInterval(interval);

  }, [])

  const bgIcons = [
  { icon: <FaCapsules />, style: { top: '12%', left: '8%'} },
  { icon: <FaPills />, style: { top: '30%', left: '85%' }},
  { icon: <FaReact />, style: { top: '60%', left: '12%' }},
  { icon: <FaPrescriptionBottle/>, style: { top: '70%', left: '80%' }},
  { icon: <FaCogs />, style: { top: '15%', left: '60%' } },
  { icon: <FaUserMd />, style: { top: '80%', left: '45%' } },
  { icon: <FaTerminal />, style: { top: '50%', left: '50%' } },
  { icon: <FaBug />, style: { top: '65%', left: '65%' } },
  { icon: <FaSyringe />, style: { top: '25%', left: '35%' } },
  { icon: <FaHeartbeat />, style: { top: '50%', left: '80%' }, color: "#fbc02d" },
  { icon: <FaBandAid />, style: { top: '40%', left: '20%' }, color: "#0288d1" },
  { icon: <FaBriefcaseMedical />, style: { top: '10%', left: '75%' }, color: "#7b1fa2" },
  { icon: <PiFlowArrowBold />, style: { top: '85%', left: '25%' }, color: "#d81b60" },
 
  ]
  const summaries = [
    {
      num: '90%',
      text:'Collaborations'
    },
    {
      num:'80%',
      text:'Pressure Handling'
    },
    {
      num:'+50%',
      text:'Consumer Satisfied'
    }
  ]
   const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const borderRadius = useSpring(
    useTransform(scrollYProgress, [0, 0.7], ["0px", "90px"]),
    { stiffness: 60, damping: 18 }
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.7], [1, 0.95]),
    { stiffness: 60, damping: 18 }
  );
    const y = useSpring(
    useTransform(scrollYProgress, [0, 0.7], [0, -80]),
    { stiffness: 60, damping: 18 }
  );

  return (
    <motion.div  ref={heroRef}
      className="hero"
      id="home"
      style={{ borderRadius, scale, y, position: "relative", overflow: "hidden" }}>

        {bgIcons.map(({ icon, style }, idx) => (
      <motion.div
        className="bg-icons"
        key={idx}
        style={{ ...style, position: 'absolute', zIndex: 0 }}
        animate={{
          rotate: [0, 15, -15, 0],
          x: [0, 10, -10, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 4 + (idx % 3), 
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: idx * 0.2
        }}
      >
        {icon}
      </motion.div>
    ))}

       
      <div className="hero-content">
        
        <div className="content">
          <h1>
            Heyy{' '}
           <motion.svg
              width="36" 
              height="36"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-hand"
              style={{ verticalAlign: 'middle', marginLeft: '5px' }}
              animate={{
                rotate: [0, 20, -10, 20, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <path d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z" fill="#8C644D"></path>
              <path d="M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z" fill="#BF9169"></path>
              <path d="M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z" fill="#8C644D"></path>
              <path d="M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z" fill="#BF9169"></path>
              <path d="M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z" fill="#8C644D"></path>
              <path d="M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z" fill="#BF9169"></path>
              <path d="M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z" fill="#8C644D"></path>
              <path d="M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z" fill="#BF9169"></path>
              <path d="M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z" fill="#8C644D"></path>
              <path d="M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z" fill="#BF9169"></path>
            </motion.svg>
            {' '}! I am Micheal Ikechukwu. <span id='ChangedText'> Frontend Engineer</span>
          </h1>
          <p> I’m a frontend developer passionate about crafting modern, responsive web experiences using React. I focus on building clean, interactive UIs with a strong eye for design and usability. From reusable components to smooth animations, I love turning ideas into sleek, functional interfaces.</p>
        </div>
        <div className="strengths">
          {summaries.map(({num , text} , index)=>(
         <div className="core" key={index}>
            <span>{num}</span>
            <p>{text}</p>
          </div>
     ))}
          
        </div>
        <div className="button-contain">
           <Button title={'Get in Touch'}/>
        </div>
        <div className="socials">
  <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaGithub />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaLinkedin />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaTwitter />
  </a>
  <a href='#' target='_blank' className='social-icon'>
    <FaWhatsapp/>
  </a>
</div>
      </div>
    </motion.div>
  )
}

export default Hero