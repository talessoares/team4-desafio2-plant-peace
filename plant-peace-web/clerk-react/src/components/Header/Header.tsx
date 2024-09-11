import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import styles from "./Header.module.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logoImage} />
        </Link>
      </div>

      <div className={styles.navContainer}>
        <HamburgerMenu />

        <nav className={styles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
        </nav>
      </div>

      <div className={styles.profile}>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <div className={styles.profileImg}>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: styles.profileImg,
                },
              }}
            />
          </div>
        </SignedIn>
      </div>
    </header>
  );
};
