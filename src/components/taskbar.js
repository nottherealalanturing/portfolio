import React from 'react';
import StartButton from './startbutton';
import styles from './styles/taskbar.module.css';

const Taskbar = () => (
  <nav className={styles.taskbar}>
    <StartButton />
  </nav>
);

export default Taskbar;
