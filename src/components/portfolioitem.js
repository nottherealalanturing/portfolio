/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from './styles/portfolioitem.module.css';

const PortfolioItem = ({
  appname,
  appimage,
  appdesc,
  applivelink,
  appgithublink,
  appstack,
}) => (
  <article className={styles.card}>
    <div className={styles.left}>
      <img src={appimage} className={styles.thumb} alt={appname} />
      <div className={styles.appstack}>
        {appstack.map((i) => (
          <TechStack stack={i} key={i} />
        ))}
      </div>
    </div>
    <div className={styles.right}>
      <h1>{appname}</h1>
      <p>{appdesc}</p>
      <div className={styles.applinks}>
        <a href={applivelink} target="_blank" rel="noreferrer">
          <FiExternalLink size="24px" color="#2a5f55" />
        </a>
        <a href={appgithublink} target="_blank" rel="noreferrer">
          <FiGithub size="24px" color="#2a5f55" />
        </a>
      </div>
    </div>
  </article>
);

const TechStack = ({ stack }) => <div className={styles.stack}>{stack}</div>;

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
