import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorCode}>404</h1>
        <p className={styles.errorMessage}>Oops! Page not found.</p>
        
        <div className={styles.gifContainer}>
          <iframe
            src="https://giphy.com/embed/XSTtrAN0rJfy"
            width="100%"
            height="100%"
            style={{ position: 'absolute' }}
            frameBorder="0"
            className={styles.giphyEmbed}
            allowFullScreen
          ></iframe>
        </div>
        
        <Link to="/" className={styles.goHome}>Go to Homepage</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
