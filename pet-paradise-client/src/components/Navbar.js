import React from 'react'
import "../../src/styles/Global.module.css"

function Navbar() {

  return (
    <nav>
    <div className="nav-wrapper  orange lighten-1">
      <a href="/" className="brand-logo"> <i className='material-icons'>pets</i> Pet Paradise</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/"><b>Home</b></a></li>
        <li><a href="/about"><b>About Us</b></a></li>
        <li><a href="/listings"><b>Listings</b></a></li>
      </ul>
    </div>
  </nav>
        
  )
  
}

export default Navbar