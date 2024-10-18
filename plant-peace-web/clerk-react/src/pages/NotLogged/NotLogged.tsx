import { Link } from "react-router-dom";
import styles from "./NotLogged.module.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const NotLogged = () => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <p className={styles.errorMessage}>
          Oops! You must be logged in to view this page
        </p>

        <div className={styles.gifContainer}>
          <iframe
            src="https://giphy.com/embed/XSTtrAN0rJfy"
            width="100%"
            height="100%"
            style={{ position: "absolute" }}
            frameBorder="0"
            className={styles.giphyEmbed}
            allowFullScreen
          ></iframe>
        </div>

        <Link to="/" className={styles.goHome}>
          Go to Homepage
        </Link>

        <h2 className={styles.or}>OR</h2>

        <div className={styles.profile}>
          <div className={styles.signedOutButton}>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>

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
      </div>
    </div>
  );
};

export default NotLogged;
