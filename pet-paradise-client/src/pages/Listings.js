import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


import axios from 'axios';
import styles from '../styles/Global.module.css';

const Listings = () => {

  const [data, setData] = useState([]);


  const updateData = async () => {
    const res = await axios.post('http://localhost:3001/get-all-listings');
    setData(res.data.listings);
    console.log(res.data.listings);
  }

  useEffect( () => {
    updateData();
  }, [])


  const renderCards = () => {
    return data.map( () => (
      <>
        <div className='card'>
          
        </div>
      </>
    ))
  }

  return (
    <>
      <Navbar />
        <div className={styles.listingContainer}>
          {renderCards()}
        </div>
      <Footer />
    </>
  )
}

export default Listings
