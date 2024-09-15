import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CustomButton.module.css';

interface CustomButtonProps {
  text: string;
  to: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      {text}
    </button>
  );
};

export default CustomButton;
