import React from 'react';
import { useSelector } from 'react-redux';
import {
  bioicon, mailicon, portfolioicon, resumeicon,
} from '../assets/icons';
import { taskbarfocus } from '../redux/taskbar/actions';
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
              action={taskbarfocus}
            />
          )}
          {!taskbarapps.mail.closed && (
            <TaskbarApp
              name="mail"
              icon={mailicon}
              altText="icon"
              appstate={taskbarapps.mail}
              action={taskbarfocus}
            />
          )}
          {!taskbarapps.portfolio.closed && (
            <TaskbarApp
              name="portfolio"
              icon={portfolioicon}
              altText="icon"
              appstate={taskbarapps.portfolio}
              action={taskbarfocus}
            />
          )}
          {!taskbarapps.resume.closed && (
            <TaskbarApp
              name="resume"
              icon={resumeicon}
              altText="icon"
              appstate={taskbarapps.resume}
              action={taskbarfocus}
            />
          )}
        </ul>

        <Notificationarea />
      </nav>
    </>
  );
};

export default Taskbar;
