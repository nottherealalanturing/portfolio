import React, { useEffect, useState } from 'react';
import styles from './styles/notificationarea.module.css';
import TaskDivider from './taskdivider';
import { speakericon } from '../assets/icons';

const Notificationarea = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date(), 60000));
  }, [dateState]);

  return (
    <div className={styles.container}>
      <TaskDivider />
      <div className={styles.notificationarea}>
        <img src={speakericon} alt="speaker icon" className={styles.icons} />
        <p className={styles.time}>
          {dateState.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </p>
      </div>
    </div>
  );
};

export default Notificationarea;
