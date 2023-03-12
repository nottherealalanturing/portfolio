import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './styles/notificationarea.module.css';
import TaskDivider from './taskdivider';
import { speakericon } from '../assets/icons';

const Notificationarea = () => {
  const [dateState, setDateState] = useState(new Date());
  const isBigScreen = useMediaQuery({ query: '(min-width: 501px)' });

  useEffect(() => {
    setInterval(() => setDateState(new Date(), 60000));
  }, [dateState]);

  return (
    <div className={styles.container}>
      <TaskDivider />
      <div
        className={styles.notificationarea}
        style={{
          width: isBigScreen ? '80px' : '70px',
        }}
      >
        <img
          src={speakericon}
          alt="speaker icon"
          className={styles.icons}
          style={{
            width: isBigScreen ? '15px' : '12px',
            height: isBigScreen ? '15px' : '12px',
          }}
        />
        <p
          className={styles.time}
          style={{
            fontSize: isBigScreen ? '12px' : '10px',
          }}
        >
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
