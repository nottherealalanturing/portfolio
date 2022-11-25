import React from 'react';
import ProtoTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './styles/icon.module.css';
import { launchApp } from '../redux/taskbar/actions';

const Icon = ({ appname, icon }) => {
  const dispatcher = useDispatch();
  return (
    <div
      tabIndex="-1"
      className={styles.container}
      onDoubleClick={() => dispatcher(launchApp(appname))}
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
