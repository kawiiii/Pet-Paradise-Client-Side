import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/Global.module.css'


const Home = () => {
  return (<div> 
    <Navbar/>
    <header>
      <main>
        <h1>Speak for the <focusWord>Voiceless</focusWord></h1>   
        <a className="waves-effect waves-light btn orange accent-3"><i class="material-icons left">content_paste</i> <mybtn>See All Listings</mybtn></a>     
      </main>
   </header>   
   <Footer/>
    </div>
  )
}



export default Home