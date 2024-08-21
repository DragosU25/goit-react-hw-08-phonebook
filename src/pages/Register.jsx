// src/pages/Register/Register.jsx

import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import styles from './styles.module.css';

function Register() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <RegisterForm />
    </div>
  );
}

export default Register;
