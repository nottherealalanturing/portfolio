import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/startbtn.module.css';
import { winicon } from '../assets/icons';
import { clickStart } from '../redux/taskbar/actions';

const StartButton = () => {
  const dispatcher = useDispatch();
  const startButtonState = useSelector((state) => state.taskbar.startbutton);

  return (
    <button
      className={
        startButtonState ? styles.startbtnclicked : styles.startbtnunclicked
      }
      type="button"
      onClick={() => dispatcher(clickStart())}
    >
      <img src={winicon} alt="start button" className={styles.logo} />
      Start
    </button>
  );
};

export default StartButton;
