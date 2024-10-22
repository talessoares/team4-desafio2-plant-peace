import React from "react";
import styles from "./AboutUs.module.css";
import GitHubProfileCard from "@/components/GithubProfileCard/GithubProfileCard";

const AboutUs: React.FC = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.aboutUsHeader}>
        <h1>Meet Our Team</h1>
        <p>
          We are the team behind the project. We are a group of developers who
          are passionate about technology and are always looking for new
          challenges.
        </p>
      </div>

      <div className={styles.profilesContainer}>
        <div className={styles.cardWrapper}>
          <GitHubProfileCard username="Mendes113" />
        </div>

        <div className={styles.cardWrapper}>
          <GitHubProfileCard username="Dorneles999" />
        </div>

        <div className={styles.cardWrapper}>
          <GitHubProfileCard username="erikmiqueias" />
        </div>

        <div className={styles.cardWrapper}>
          <GitHubProfileCard username="talessoares" />
        </div>

        <div className={styles.cardWrapper}>
          <GitHubProfileCard username="Wuesley" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;