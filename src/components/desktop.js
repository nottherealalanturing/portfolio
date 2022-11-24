import React from 'react';
import styles from './styles/desktop.module.css';
import WindowFrame from './windowframe';
import { mailicon, portfolioicon, bioicon, resumeicon } from '../assets/icons';

const Desktop = () => (
  <div className={styles.desktopArea}>
    <WindowFrame appname="mail" icon={mailicon}>
      <p>dbjbasjdbasjbasfasfasknfasjkln</p>
    </WindowFrame>
    <WindowFrame appname="projects" icon={portfolioicon}>
      <p>dbjbasjdbasjbasfasfasknfasjkln</p>
    </WindowFrame>
    <WindowFrame appname="about" icon={bioicon}>
      <p>dbjbasjdbasjbasfasfasknfasjkln</p>
    </WindowFrame>
    <WindowFrame appname="resume" icon={resumeicon}>
      <p>dbjbasjdbasjbasfasfasknfasjkln</p>
    </WindowFrame>
  </div>
);
export default Desktop;
