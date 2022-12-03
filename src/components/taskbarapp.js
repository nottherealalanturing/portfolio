/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styles from './styles/taskbarapp.module.css';

const TaskbarApp = ({
  icon, name, altText, appstate, action,
}) => {
  const dispatcher = useDispatch();
  const isBigScreen = useMediaQuery({ query: '(min-width: 501px)' });
  return (
    <button
      className={appstate.open ? styles.active : styles.notactive}
      type="button"
      onClick={() => dispatcher(action(name))}
      style={{
        width: isBigScreen ? '130px' : '60px',
        fontSize: isBigScreen ? '13px' : '8px',
        maxWidth: isBigScreen ? '130px' : '60px',
        marginRight: isBigScreen ? '5px' : '0px',
        marginLeft: isBigScreen ? '5px' : '1px',
        gap: isBigScreen ? '10px' : '2px',
      }}
    >
      <img
        className={styles.icon}
        src={icon}
        alt={altText}
        style={{
          width: isBigScreen ? '18px' : '14px',
          height: isBigScreen ? '18px' : '14px',
        }}
      />
      <span className={styles.name}>{name}</span>
    </button>
  );
};

TaskbarApp.propTypes = {
  name: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  appstate: PropTypes.object,
  action: PropTypes.any,
};

export default TaskbarApp;
