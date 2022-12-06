import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/desktop.module.css';
import {
  mailicon,
  portfolioicon,
  bioicon,
  resumeicon,
  blogicon,
} from '../assets/icons';
import Icon from './Icon';
import {
  AboutContentArea,
  MailContentArea,
  ResumeContentArea,
  PortfolioContentArea,
  BlogContentArea,
} from './contentarea';
import Frame from './Frame';
import { closeStart } from '../redux/taskbar/actions';

const Desktop = () => {
  const desktopapp = useSelector((state) => state.taskbar);
  const dispatcher = useDispatch();
  const [height, setHeight] = useState(0);
  const desktopareaheight = useRef(null);

  useEffect(() => {
    setHeight(desktopareaheight.current.clientHeight);
  }, []);
  return (
    <div
      className={styles.desktopArea}
      ref={desktopareaheight}
      onClick={() => dispatcher(closeStart())}
      aria-hidden="true"
    >
      <ul className={styles.iconlist}>
        <Icon appname="about" icon={bioicon} />
        <Icon appname="mail" icon={mailicon} />
        <Icon appname="portfolio" icon={portfolioicon} />
        <Icon appname="resume" icon={resumeicon} />
        <Icon appname="blog" icon={blogicon} />
      </ul>
      {!desktopapp.mail.closed && (
        <Frame
          appname="mail"
          appicon={mailicon}
          desktopheight={height}
          isminimize={desktopapp.mail.minimize}
        >
          <MailContentArea />
        </Frame>
      )}
      {!desktopapp.portfolio.closed && (
        <Frame
          appname="portfolio"
          appicon={portfolioicon}
          desktopheight={height}
          isminimize={desktopapp.portfolio.minimize}
        >
          <PortfolioContentArea />
        </Frame>
      )}
      {!desktopapp.about.closed && (
        <Frame
          appname="about"
          appicon={bioicon}
          desktopheight={height}
          isminimize={desktopapp.about.minimize}
        >
          <AboutContentArea />
        </Frame>
      )}
      {!desktopapp.resume.closed && (
        <Frame
          appname="resume"
          appicon={resumeicon}
          desktopheight={height}
          isminimize={desktopapp.resume.minimize}
        >
          <ResumeContentArea />
        </Frame>
      )}
      {!desktopapp.blog.closed && (
        <Frame
          appname="blog"
          appicon={blogicon}
          desktopheight={height}
          isminimize={desktopapp.blog.minimize}
        >
          <BlogContentArea />
        </Frame>
      )}
    </div>
  );
};
export default Desktop;
