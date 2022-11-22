import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles/menuitem.module.css';
import { alterState } from '../redux/menuitemsSlice';

const MenuItem = ({ icon, name, altText }) => {
  const menuitems = useSelector((state) => state.menuitems);
  const dispatch = useDispatch();
  return (
    <button
      className={menuitems[name] ? styles.item : styles.clicked}
      onClick={() => dispatch(alterState(name.toLowerCase()))}
      type="button"
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
};

export default MenuItem;
