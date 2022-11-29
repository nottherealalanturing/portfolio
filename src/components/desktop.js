import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles/desktop.module.css';
import WindowFrame from './windowframe';
import { mailicon, portfolioicon, bioicon, resumeicon } from '../assets/icons';
import Icon from './Icon';
import AboutContentArea from './biographycontentarea';
import MailContentArea from './mailcontentarea';
import ResumeContentArea from './resumecontentarea';
import PortfolioContentArea from './portfoliocontentarea';

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
          <MailContentArea />
        </WindowFrame>
      )}
      {!desktopapp.portfolio.closed && (
        <WindowFrame
          appname="portfolio"
          icon={portfolioicon}
          isminimize={!desktopapp.portfolio.minimize}
        >
          <PortfolioContentArea />
        </WindowFrame>
      )}
      {!desktopapp.about.closed && (
        <WindowFrame
          appname="about"
          icon={bioicon}
          isminimize={!desktopapp.about.minimize}
        >
          <AboutContentArea />
        </WindowFrame>
      )}
      {!desktopapp.resume.closed && (
        <WindowFrame
          appname="resume"
          icon={resumeicon}
          isminimize={!desktopapp.resume.minimize}
        >
          <ResumeContentArea />
        </WindowFrame>
      )}
    </div>
  );
};
export default Desktop;
