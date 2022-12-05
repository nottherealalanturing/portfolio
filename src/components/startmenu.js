import React from 'react';
import {
  bioicon,
  docicon,
  findicon,
  helpicon,
  mailicon,
  portfolioicon,
  progicon,
  resumeicon,
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
      <StartMenuItem appname="about" icon={bioicon} />
      <StartMenuItem appname="mail" icon={mailicon} />
      <StartMenuItem appname="portfolio" icon={portfolioicon} />
      <StartMenuItem appname="resume" icon={resumeicon} />
      <StartMenuItem appname="" icon={''} />
      <StartMenuItem appname="" icon={''} />
      <div className={styles.seperator} />
      <StartMenuItem appname="Shut Down..." icon={shuticon} />
    </ul>
  </div>
);

export default StartMenu;
