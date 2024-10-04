import React from "react";
import styles from "./Contact.module.css";
import email from "../assets/email.png";
import link from "../assets/linkedinIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:vickypvm10l@email.com">vickypvm10@email.com</a>
        </li>
        <li className={styles.link}>
          <img src={link} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/vignesh-m-7107aa2b3">
            linkedin.com/vignesh.M/
          </a>
        </li>
      </ul>
      <h6>CopyRight&copy;2024</h6>
    </footer>
  );
};
