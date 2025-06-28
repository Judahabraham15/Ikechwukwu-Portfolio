import './App.css'
import Bio from './Components/BIO/Bio'
import Button from './Components/Button/Button'
import Contacts from './Components/Contacts/Contacts'
import Expertise from './Components/Expertise/Expertise'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import Timeline from './Components/Timeline/Timeline'

function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <Bio/>
    <Expertise/>
    <Timeline/>
    <Projects/>
    <Contacts/>
    <Footer/>
        </>
  )
}

export default App
