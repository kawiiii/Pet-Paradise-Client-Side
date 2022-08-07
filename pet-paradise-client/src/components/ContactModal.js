import React from "react";
import styles from "../styles/contactModal.module.scss";

const ContactModal = ({ user, closeModal }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <h5>Contact</h5>
          <img src="/images/close.svg" onClick={() => closeModal()}></img>
        </div>
        <hr></hr>
        <div className="modalInfo">
          <p>{user.name}</p>
          <p>{user.email}</p>
          <br></br>
          <p>Address: {user.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
