import React from 'react';
import {
  bioicon,
  blogicon,
  mailicon,
  portfolioicon,
  resumeicon,
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
      <StartMenuItem appname="about" action="about" icon={bioicon} />
      <StartMenuItem appname="mail" action="mail" icon={mailicon} />
      <StartMenuItem
        appname="portfolio"
        action="portfolio"
        icon={portfolioicon}
      />
      <StartMenuItem appname="resume" action="resume" icon={resumeicon} />
      <StartMenuItem appname="blog" action="blog" icon={blogicon} />
      <div style={{ width: '125px', height: '32px' }} />
      <div className={styles.seperator} />
      <StartMenuItem appname="Shut Down..." action="shutdown" icon={shuticon} />
    </ul>
  </div>
);

export default StartMenu;
