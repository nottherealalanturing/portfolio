import React from 'react';
import { useSelector } from 'react-redux';
import StartButton from './startbutton';
import styles from './styles/taskbar.module.css';
import {
  mailicon, bioicon, portfolioicon, resumeicon,
} from '../assets/icons';
import TaskbarApp from './taskbarapp';
import Notificationarea from './notificationarea';
import TaskDivider from './taskdivider';
import { maximize, minimize, close } from '../redux/taskbar/actions';
import StartMenu from './startmenu';

const Taskbar = () => {
  const taskbarapps = useSelector((state) => state.taskbar);
  return (
    <>
      {taskbarapps.startbutton && <StartMenu />}
      <nav className={styles.taskbar}>
        <ul className={styles.programList}>
          <StartButton />
          <TaskDivider />
          <TaskbarApp
            name="about"
            icon={bioicon}
            altText="icon"
            appstate={taskbarapps.about}
            action={minimize}
          />
          <TaskbarApp
            name="mail"
            icon={mailicon}
            altText="icon"
            appstate={taskbarapps.mail}
            action={maximize}
          />
          <TaskbarApp
            name="portfolio"
            icon={portfolioicon}
            altText="icon"
            appstate={taskbarapps.projects}
            action={close}
          />
          <TaskbarApp
            name="resume"
            icon={resumeicon}
            altText="icon"
            appstate={taskbarapps.resume}
            action={close}
          />
        </ul>

        <Notificationarea />
      </nav>
    </>
  );
};

export default Taskbar;
