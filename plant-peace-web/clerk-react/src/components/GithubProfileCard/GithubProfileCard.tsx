import React, { useEffect, useState } from "react";
import styles from "./GithubProfileCard.module.css";

interface GitHubProfileCardProps {
  username: string;
}

interface GitHubUser {
  name: string;
  avatar_url: string;
  html_url: string;
}

const GitHubProfileCard: React.FC<GitHubProfileCardProps> = ({ username }) => {
  const [userData, setUserData] = useState<GitHubUser | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (!userData) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={userData.avatar_url}
        alt={`${userData.name}'s avatar`}
      />
      <h2>{userData.name}</h2>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        Check Github Profile
      </a>
    </div>
  );
};

export default GitHubProfileCard;
