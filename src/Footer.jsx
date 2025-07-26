import React from "react";
import styles from "./Userdetails.module.css";

function Footer({ name, email }) {
  return (
    <footer className={styles.footer}>
      <div>
        <strong>Name:</strong> {name || "N/A"}
      </div>
      <div>
        <strong>Email:</strong> {email || "N/A"}
      </div>
    </footer>
  );
}

export default Footer;
