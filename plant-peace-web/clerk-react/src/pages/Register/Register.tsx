import React from 'react'
import styles from "./Register.module.css";
import Form from '@/components/Form/Form';

const Register: React.FC = () => {
  return (
    <div className={styles.container}>
        <Form />
    </div>
  );
};

export default Register