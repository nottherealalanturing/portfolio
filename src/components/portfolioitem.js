/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import PropTypes from 'prop-types';
import styles from './styles/portfolioitem.module.css';

const PortfolioItem = ({
  appname,
  appimage,
  appdesc,
  appgithublink,
  applivelink,
  appstack,
}) => (
  <li className={styles.container}>
    <div className={styles.imagediv}>
      <img src={appimage} alt={appname} className={styles.appimage} />
    </div>
    <div className={styles.textdiv}>
      <h3 className={styles.appname}>{appname}</h3>
      <p className={styles.appdesc}>{appdesc}</p>
      <span className={styles.appstack}>
        {appstack.map((i) => (
          <TechStack stack={i} key={i} />
        ))}
      </span>
      <div className={styles.applinks}>
        <a href={applivelink} target="_blank" rel="noreferrer">
          <FiExternalLink size="24px" color="#2a5f55" />
        </a>
        <a href={appgithublink} target="_blank" rel="noreferrer">
          <FiGithub size="24px" color="#2a5f55" />
        </a>
      </div>
    </div>
  </li>
);

const TechStack = ({ stack }) => <span className={styles.stack}>{stack}</span>;

PortfolioItem.propTypes = {
  appname: PropTypes.string.isRequired,
  appimage: PropTypes.string.isRequired,
  appdesc: PropTypes.string.isRequired,
  applivelink: PropTypes.string.isRequired,
  appgithublink: PropTypes.string.isRequired,
  appstack: PropTypes.array.isRequired,
};

TechStack.propTypes = {
  stack: PropTypes.string.isRequired,
};

export default PortfolioItem;
