import React from 'react';
import { useSelector } from 'react-redux';
import StartButton from './startbutton';
import styles from './styles/taskbar.module.css';
import Mail from '../assets/icons/mail.png';
import Bio from '../assets/icons/bio.png';
import Folder from '../assets/icons/opensource.png';
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
            icon={Bio}
            altText="icon"
            appstate={taskbarapps.mail}
            action={minimize}
          />
          <TaskbarApp
            name="mail"
            icon={Mail}
            altText="icon"
            appstate={taskbarapps.mail}
            action={maximize}
          />
          <TaskbarApp
            name="portfolio"
            icon={Folder}
            altText="icon"
            appstate={taskbarapps.mail}
            action={close}
          />
        </ul>

        <Notificationarea />
      </nav>
    </>
  );
};

export default Taskbar;
