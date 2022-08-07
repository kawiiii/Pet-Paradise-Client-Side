import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/Global.module.css'

import { Link } from 'react-router-dom'


const Home = () => {
  return (<div> 
    <Navbar/>
    <header>
      <main>
        <h1>Speak for the <focusWord>Voiceless</focusWord></h1>   
        <Link to='addListing' className="waves-effect waves-light btn orange accent-3"><i class="material-icons left">content_paste</i> <mybtn>Add Listing</mybtn></Link>     
      </main>
   </header>   
   <Footer/>
    </div>
  )
}



export default Home