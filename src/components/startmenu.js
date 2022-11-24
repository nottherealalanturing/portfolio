import React from 'react';
import {
  docicon,
  findicon,
  helpicon,
  progicon,
  runicon,
  settingsicon,
  shuticon,
  sidebaricon,
} from '../assets/icons';
import StartMenuItem from './startmenuitem';
import styles from './styles/startmenu.module.css';

const StartMenu = () => (
  <div className={styles.container}>
    <span className={styles.sidebar}>
      <img src={sidebaricon} alt="sidebar" className={styles.sidebarimg} />
    </span>
    <ul className={styles.listcontainer}>
      <StartMenuItem text="Programs" icon={progicon} />
      <StartMenuItem text="Documents" icon={docicon} />
      <StartMenuItem text="Settings" icon={settingsicon} />
      <StartMenuItem text="Find" icon={findicon} />
      <StartMenuItem text="Help" icon={helpicon} />
      <StartMenuItem text="Run" icon={runicon} />
      <div className={styles.seperator} />
      <StartMenuItem text="Shut Down..." icon={shuticon} />
    </ul>
  </div>
);

export default StartMenu;
