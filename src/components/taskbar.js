import React from 'react';
import { useSelector } from 'react-redux';
import StartButton from './startbutton';
import styles from './styles/taskbar.module.css';
import Bio from '../assets/icons/bio.png';
import MenuItem from './menuitem';
import Notificationarea from './notificationarea';
import TaskDivider from './taskdivider';
import { maximize, minimize, close } from '../redux/taskbar/actions';

const Taskbar = () => {
  const taskbarapps = useSelector((state) => state.taskbar);
  return (
    <nav className={styles.taskbar}>
      <ul className={styles.programList}>
        <StartButton />
        <TaskDivider />
        <MenuItem
          name="mail"
          icon={Bio}
          altText="icon"
          appstate={taskbarapps.mail}
          action={minimize}
        />
        <MenuItem
          name="mail"
          icon={Bio}
          altText="icon"
          appstate={taskbarapps.mail}
          action={maximize}
        />
        <MenuItem
          name="mail"
          icon={Bio}
          altText="icon"
          appstate={taskbarapps.mail}
          action={close}
        />
      </ul>

      <Notificationarea />
    </nav>
  );
};

export default Taskbar;
