import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal';

import axios from 'axios';
import styles from '../styles/Global.module.css';

const Listings = () => {

  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeUser, setActiveUser] = useState({});


  const updateData = async () => {
    const res = await axios.post('http://localhost:3001/get-all-listings');
    setData(res.data.listings);
    console.log(res.data.listings);
  }

  useEffect( () => {
    updateData();
  }, [])


  const showContactModal = (user) => {
    setActiveUser(user);
    setShowModal(true);
  }


  const closeModal = () => {
    setActiveUser(null);
    setShowModal(false);
  }

  const renderCards = () => {
    // console.log(data);
    return data.map( (item) => (
        <button onClick={() => showContactModal(item)}>{item.name}</button>
    ))
  }

  return (
    <>
      <Navbar />
        <div className={styles.listingContainer}>
          {renderCards()}
        </div>
      <Footer />
      {
        showModal && <ContactModal user={activeUser} closeModal={closeModal}/>
      }
    </>
  )
}

export default Listings
