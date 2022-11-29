import React from 'react';
import starwars from '../assets/portfolio/starwars.jpg';
import PortfolioItem from './portfolioitem';
import styles from './styles/portfoliocontentarea.module.css';

const projects = [
  {
    appname: 'star wars',
    appimage: starwars,
    appdesc: 'This is the final sequel',
    appgithublink: 'https://git',
    applivelink: 'https://git',
    appstack: ['HTML', 'CSS', 'React', 'Node'],
  },
  {
    appname: 'Indiana Jone',
    appimage: starwars,
    appdesc: 'The house of dragons',
    appgithublink: 'https://git',
    applivelink: 'https://git',
    appstack: ['React', 'Node', 'Rails'],
  },
  {
    appname: 'star wars',
    appimage: starwars,
    appdesc: 'This is the final sequel',
    appgithublink: 'https://git',
    applivelink: 'https://git',
    appstack: ['HTML', 'CSS', 'React', 'Node'],
  },
  {
    appname: 'Indiana Jone',
    appimage: starwars,
    appdesc: 'The house of dragons',
    appgithublink: 'https://git',
    applivelink: 'https://git',
    appstack: ['React', 'Node', 'Rails'],
  },
  {
    appname: 'star wars',
    appimage: starwars,
    appdesc: 'This is the final sequel',
    appgithublink: 'https://git',
    applivelink: 'https://git',
    appstack: ['HTML', 'CSS', 'React', 'Node'],
  },
  {
    appname: 'Indiana Jone',
    appimage: starwars,
    appdesc: 'The house of dragons',
    appgithublink: 'https://git',
    applivelink: 'https://git',
    appstack: ['React', 'Node', 'Rails'],
  },
];
const PortfolioContentArea = () => (
  <ul className={styles.container}>
    {projects.map((project) => (
      <PortfolioItem
        appname={project.appname}
        appimage={project.appimage}
        appdesc={project.appdesc}
        appgithublink={project.appgithublink}
        applivelink={project.applivelink}
        appstack={project.appstack}
        key={project.appname}
      />
    ))}
  </ul>
);
export default PortfolioContentArea;
