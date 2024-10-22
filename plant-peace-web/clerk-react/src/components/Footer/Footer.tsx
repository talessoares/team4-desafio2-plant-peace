import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.upperSection}>
        <div className={styles.squareLeft}>
          <h1>Stay Fresh</h1>
          <br />
          <h3>compassinhos@gmail.com</h3>
          <h3>+55 (41) 99999-9999</h3>
          <br />
        </div>
        <div className={styles.squaresRight}>
          <div className={styles.square1}>
            <h2>Links</h2>
            <Link to="/aboutus">About Us</Link>
            <br />
            <Link to="/products">Product</Link>
            <br></br>
            <Link to="/error">Blogs</Link>
          </div>

          <div className={styles.square2}>
            <h2>Community</h2>

            <Link to="/aboutus">About Us</Link>
            <br />
            <Link to="/products">Product</Link>
            <br></br>
            <Link to="/error">Blogs</Link>
          </div>
        </div>
      </div>

      <div className={styles.boxdivider}>
        <hr className={styles.divider} />
      </div>

      <div className={styles.lowerSection}>
        <div className={styles.squareLeftdown}>
          <Link to="/">
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </Link>
        </div>
        <div className={styles.squareRight}>
          <h3>Compassinhos ®. All rights reserved.</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;