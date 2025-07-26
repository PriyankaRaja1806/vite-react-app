import React, { useState } from "react";
import styles from "./Userdetails.module.css";
import Footer from "./Footer";

function Userdetails({ onDetailsChange }) {
  const [details, setDetails] = useState({ name: "", email: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    const updatedDetails = { ...details, [name]: value };
    setDetails(updatedDetails);
    onDetailsChange(updatedDetails);
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={details.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={details.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.footerContainer}>
          <Footer name={details.name} email={details.email} />
        </div>
      </form>
    </div>
  );
}

export default Userdetails;
