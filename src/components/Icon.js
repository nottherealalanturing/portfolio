import React from 'react';
import ProtoTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { launchApp } from '../redux/taskbar/actions';
import styles from './styles/icon.module.css';

const Icon = ({ appname, icon }) => {
  const dispatcher = useDispatch();
  const isBigScreen = useMediaQuery({ query: '(min-width: 501px)' });

  return (
    <div
      tabIndex="-1"
      className={styles.container}
      aria-hidden
      onDoubleClick={() => dispatcher(launchApp(appname))}
      onClick={(e) => {
        e.preventDefault();
        if (isBigScreen) return;
        dispatcher(launchApp(appname));
      }}
    >
      <img src={icon} alt={appname} className={styles.icon} />
      <span className={styles.appname}>{appname}</span>
    </div>
  );
};

Icon.propTypes = {
  appname: ProtoTypes.string.isRequired,
  icon: ProtoTypes.string.isRequired,
};

export default Icon;
