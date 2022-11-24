import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/startmenuitem.module.css';

const StartMenuItem = ({ text, icon }) => (
  <li className={styles.container}>
    <img src={icon} className={styles.icon} alt={text} />
    <span className={styles.smiText}>{text}</span>
  </li>
);

StartMenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default StartMenuItem;
