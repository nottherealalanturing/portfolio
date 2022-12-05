import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Taskbar from './taskbar';
import Icon from './Icon';
import { bioicon, mailicon, portfolioicon, resumeicon } from '../assets/icons';
import { closeStart } from '../redux/taskbar/actions';
import MobileFrame from './mobileframe';
import MailContentArea from './mailcontentarea';
import styles from './styles/mobileversion.module.css';
import PortfolioContentArea from './portfoliocontentarea';
import AboutContentArea from './biographycontentarea';
import ResumeContentArea from './resumecontentarea';

const MobileVersion = () => {
  const desktopapp = useSelector((state) => state.taskbar);
  const dispatcher = useDispatch();
  const [height, setHeight] = useState(0);
  const desktopareaheight = useRef(null);

  useEffect(() => {
    setHeight(desktopareaheight.current.clientHeight);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.mobilearea} ref={desktopareaheight}>
        <div
          className={styles.desktopArea}
          onClick={() => dispatcher(closeStart())}
          aria-hidden="true"
        >
          <ul className={styles.iconlist}>
            <Icon appname="about" icon={bioicon} />
            <Icon appname="mail" icon={mailicon} />
            <Icon appname="portfolio" icon={portfolioicon} />
            <Icon appname="resume" icon={resumeicon} />
          </ul>
          {!desktopapp.mail.closed && (
            <MobileFrame
              appname="mail"
              appicon={mailicon}
              desktopheight={height}
              isminimize={desktopapp.mail.minimize}
            >
              <MailContentArea />
            </MobileFrame>
          )}
          {!desktopapp.portfolio.closed && (
            <MobileFrame
              appname="portfolio"
              appicon={portfolioicon}
              desktopheight={height}
              isminimize={desktopapp.portfolio.minimize}
            >
              <PortfolioContentArea />
            </MobileFrame>
          )}
          {!desktopapp.about.closed && (
            <MobileFrame
              appname="about"
              appicon={bioicon}
              desktopheight={height}
              isminimize={desktopapp.about.minimize}
            >
              <AboutContentArea />
            </MobileFrame>
          )}
          {!desktopapp.resume.closed && (
            <MobileFrame
              appname="resume"
              appicon={resumeicon}
              desktopheight={height}
              isminimize={desktopapp.resume.minimize}
            >
              <ResumeContentArea />
            </MobileFrame>
          )}
        </div>
      </div>
      <Taskbar />
    </div>
  );
};

export default MobileVersion;
