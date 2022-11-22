import React, { createContext, useState } from 'react';
import StartButton from './startbutton';
import styles from './styles/taskbar.module.css';
import Bio from '../assets/icons/bio.png';
import MenuItem from './menuitem';
import Notificationarea from './notificationarea';
import TaskDivider from './taskdivider';

export const MenuItemContext = createContext();

const Taskbar = () => (
  <nav className={styles.taskbar}>
    <ul className={styles.programList}>
      <StartButton />
      <TaskDivider />
      <MenuItem name="About Me" icon={Bio} altText="icon" />
      <MenuItem name="Projects" icon={Bio} altText="icon" />
      <MenuItem name="Mail" icon={Bio} altText="icon" />
    </ul>

    <Notificationarea />
  </nav>
);

export default Taskbar;
