/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './styles/menuitem.module.css';

const MenuItem = ({ icon, name, altText, appstate, action }) => {
  const dispatcher = useDispatch();

  return (
    <button
      className={appstate.open ? styles.item : styles.minimized}
      type="button"
      onClick={() => dispatcher(action(name))}
    >
      <img className={styles.icon} src={icon} alt={altText} />
      <span className={styles.name}>{name}</span>
    </button>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  appstate: PropTypes.object,
  action: PropTypes.any,
};

export default MenuItem;
