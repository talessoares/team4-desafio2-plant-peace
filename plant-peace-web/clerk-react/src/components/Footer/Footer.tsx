// Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (

    <footer className={styles.footer}>

      {/* Seção Superior */}
      <div className={styles.upperSection}>
        <div className={styles.squareLeft}>
          <h1>Stay Fresh</h1><br />
          <h3>compassinhos@gmail.com</h3>
          <h3>+55 (41) 99999-9999</h3><br />
        </div>
        <div className={styles.squaresRight}>

          <div className={styles.square1}>
            <h2>Links</h2>
            <a href="/about-us">About Us</a><br/>
            <a href="/product">Product</a><br></br>
            <a href="/blogs">Blogs</a>
          </div>

          <div className={styles.square2}>
            <h2>Community</h2>
            
                <a href="/about-us">About Us</a><br/>
                <a href="/product">Product</a><br></br>
                <a href="/blogs">Blogs</a>
           
            </div>
        </div>
      </div>

      {/* Linha Divisória */}
      <div className={styles.boxdivider}>
      <hr className={styles.divider} />
      </div>
     

      {/* Seção Inferior */}
      <div className={styles.lowerSection}>
        <div className={styles.squareLeftdown}>
          <img src="src/assets/icons/logo.ico" alt="" />
        </div>
        <div className={styles.squareRight}><h3>Compassinhos ®. All rights reserved.</h3></div>
      </div>
      
    </footer>
  );
};

export default Footer;