import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from './styles/portfoliocontentarea.module.css';

const PortfolioContentArea = () => (
  <div className={styles.container}>
    <div>
      <span>Name of app</span>
      <span>lorem ipsum bal balaba </span>
      <span>React HTML CSS</span>
      <div>
        <a href="/s">
          <FiExternalLink />
        </a>
        <a href="hrs">
          <FiGithub />
        </a>
      </div>
    </div>
  </div>
);
export default PortfolioContentArea;
