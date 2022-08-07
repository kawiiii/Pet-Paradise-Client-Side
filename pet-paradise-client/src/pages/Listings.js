import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";

import axios from "axios";
import styles from "../styles/Global.module.css";

const Listings = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeUser, setActiveUser] = useState({});

  const updateData = async () => {
    const res = await axios.post("http://localhost:3001/get-all-listings");
    setData(res.data.listings);
    console.log(res.data.listings);
  };

  useEffect(() => {
    updateData();
  }, []);

  const showContactModal = (user) => {
    setActiveUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setActiveUser(null);
    setShowModal(false);
  };

  const renderCards = () => {
    console.log(data);
    return data.map((item) => {
      console.log(item);
      // return <button onClick={() => showContactModal(item)}>{item.name}</button>
      return (
        <div className={styles.card}>
          <div class="row" className="card">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">{item.petType} Available</span>
                  <p>
                    Age: {item.age} months
                    <br></br>
                    <hr></hr>
                    {item.desc}
                  </p>
                </div>
                <div class="card-action">
                  <a href="#" onClick={() => showContactModal(item)}>Contact Owner</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      );
    });
  };

  return (
    <>
      <Navbar />
      <div className={styles.listingContainer}>{renderCards()}</div>
      <Footer />
      {showModal && <ContactModal user={activeUser} closeModal={closeModal} />}
    </>
  );
};

export default Listings;
