import React from 'react';
import styles from './styles/startbtn.module.css';

import { ReactComponent as Logo } from '../assets/icons/windows_98_logo.svg';

const StartButton = () => (
  <button className={styles.startbtn} type="button">
    <Logo className={styles.logo} />
  </button>
);

export default StartButton;
