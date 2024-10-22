import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <button
        className={`${styles.menuButton} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      {isOpen && (
        <nav className={styles.menu}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/register" onClick={() => setIsOpen(false)}>
            Register
          </Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;