import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styles from './styles/startbtn.module.css';
import { winicon } from '../assets/icons';
import { clickStart } from '../redux/taskbar/actions';

const StartButton = () => {
  const dispatcher = useDispatch();
  const startButtonState = useSelector((state) => state.taskbar.startbutton);
  const isBigScreen = useMediaQuery({ query: '(min-width: 501px)' });

  return (
    <button
      className={
        startButtonState ? styles.startbtnclicked : styles.startbtnunclicked
      }
      type="button"
      onClick={() => dispatcher(clickStart())}
      style={{
        width: isBigScreen ? '80px' : '50px',
        fontSize: isBigScreen ? '13px' : '8px',
      }}
    >
      <img src={winicon} alt="start button" className={styles.logo} />
      Start
    </button>
  );
};

export default StartButton;
