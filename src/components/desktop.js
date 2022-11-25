import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles/desktop.module.css';
import WindowFrame from './windowframe';
import {
  mailicon, portfolioicon, bioicon, resumeicon,
} from '../assets/icons';
import Icon from './Icon';

const Desktop = () => {
  const desktopapp = useSelector((state) => state.taskbar);
  return (
    <div className={styles.desktopArea}>
      <ul className={styles.iconlist}>
        <Icon appname="about" icon={bioicon} />
        <Icon appname="mail" icon={mailicon} />
        <Icon appname="portfolio" icon={portfolioicon} />
        <Icon appname="resume" icon={resumeicon} />
      </ul>
      {!desktopapp.mail.closed && (
        <WindowFrame
          appname="mail"
          icon={mailicon}
          isminimize={!desktopapp.mail.minimize}
        >
          <p>dbjbasjdbasjbasfasfasknfasjkln</p>
        </WindowFrame>
      )}
      {!desktopapp.portfolio.closed && (
        <WindowFrame
          appname="portfolio"
          icon={portfolioicon}
          isminimize={!desktopapp.portfolio.minimize}
        >
          <p>dbjbasjdbasjbasfasfasknfasjkln</p>
        </WindowFrame>
      )}
      {!desktopapp.about.closed && (
        <WindowFrame
          appname="about"
          icon={bioicon}
          isminimize={!desktopapp.about.minimize}
        >
          <p>dbjbasjdbasjbasfasfasknfasjkln</p>
        </WindowFrame>
      )}
      {!desktopapp.resume.closed && (
        <WindowFrame
          appname="resume"
          icon={resumeicon}
          isminimize={!desktopapp.resume.minimize}
        >
          <p>dbjbasjdbasjbasfasfasknfasjkln</p>
        </WindowFrame>
      )}
    </div>
  );
};
export default Desktop;
