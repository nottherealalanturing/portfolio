import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles/startmenuitem.module.css';
import { launchApp } from '../redux/taskbar/actions';

const StartMenuItem = ({ appname, icon, action }) => {
  const dispatcher = useDispatch();

  return (
    <li
      className={styles.container}
      onClick={() => dispatcher(launchApp(action))}
      aria-hidden
    >
      <img src={icon} className={styles.icon} alt={appname} />
      <span className={styles.smiText}>{appname}</span>
    </li>
  );
};

StartMenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  appname: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export default StartMenuItem;
