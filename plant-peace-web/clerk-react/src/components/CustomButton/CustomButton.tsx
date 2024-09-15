import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CustomButton.module.css';

interface CustomButtonProps {
  text: string;
  to: string;
  onClick?: () => void; // Função opcional de callback
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(to);
    }
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      {text}
    </button>
  );
};

export default CustomButton;
