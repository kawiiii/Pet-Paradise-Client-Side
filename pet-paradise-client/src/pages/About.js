import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/Global.module.css'

const About = () => {
  return (
    <div>
    <Navbar/>
     <about>
       <leftcontainer>
          <h1>Who Are We ?</h1>
          <p>“We work for the animal welfare.Our Mission is to end the suffering of abondoned animals around the world, by uniting not only the worlds leading animal welfare organisations but also the individuals in this nobel cause . ”</p>
       </leftcontainer>
       <rightcontainer>

       </rightcontainer>
      
     </about>
    <Footer/>
    </div>
  )
}

export default About
