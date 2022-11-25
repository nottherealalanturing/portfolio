import React from 'react';
import { useSelector } from 'react-redux';
import {
  bioicon, mailicon, portfolioicon, resumeicon,
} from '../assets/icons';
import { minimize } from '../redux/taskbar/actions';
import Notificationarea from './notificationarea';
import StartButton from './startbutton';
import StartMenu from './startmenu';
import styles from './styles/taskbar.module.css';
import TaskbarApp from './taskbarapp';
import TaskDivider from './taskdivider';

const Taskbar = () => {
  const taskbarapps = useSelector((state) => state.taskbar);
  return (
    <>
      {taskbarapps.startbutton && <StartMenu />}
      <nav className={styles.taskbar}>
        <ul className={styles.programList}>
          <StartButton />
          <TaskDivider />
          {!taskbarapps.about.closed && (
            <TaskbarApp
              name="about"
              icon={bioicon}
              altText="icon"
              appstate={taskbarapps.about}
              action={minimize}
            />
          )}
          {!taskbarapps.mail.closed && (
            <TaskbarApp
              name="mail"
              icon={mailicon}
              altText="icon"
              appstate={taskbarapps.mail}
              action={minimize}
            />
          )}
          {!taskbarapps.portfolio.closed && (
            <TaskbarApp
              name="portfolio"
              icon={portfolioicon}
              altText="icon"
              appstate={taskbarapps.portfolio}
              action={minimize}
            />
          )}
          {!taskbarapps.resume.closed && (
            <TaskbarApp
              name="resume"
              icon={resumeicon}
              altText="icon"
              appstate={taskbarapps.resume}
              action={minimize}
            />
          )}
        </ul>

        <Notificationarea />
      </nav>
    </>
  );
};

export default Taskbar;
