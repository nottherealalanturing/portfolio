import React from 'react';
import styles from './styles/shutdown.module.css';
import shutdown from '../assets/images/shutdown.png';

const ShutDown = () => (
  <div className={styles.shutdown}>
    <img
      src={shutdown}
      alt="Shutdown"
      className={styles.image}
      draggable="false"
    />
  </div>
);

export default ShutDown;
