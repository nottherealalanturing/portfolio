import React from 'react';
import {
  timelycap,
  cryptobazaar,
  blockparty,
  portfolioimg,
  events,
} from '../assets/portfolio';
import PortfolioItem from './portfolioitem';
import styles from './styles/portfoliocontentarea.module.css';

const projects = [
  {
    appname: 'Timely Capsule',
    appimage: timelycap,
    appdesc:
      'Timely Capsule is a unique app that allows users to send messages into the future, creating a connection across different moments in time.',
    appgithublink: 'https://github.com/nottherealalanturing/timely_capsule',
    applivelink: 'https://timely-capsule.vercel.app/',
    appstack: ['Nextjs', 'Firestore', 'Chakraui'],
  },
  {
    appname: 'Block Party',
    appimage: blockparty,
    appdesc:
      'Block Party is a neighborhood app that meets all neighborhood needs in one place - bringing together people who share interests, and facilitate local support and collaborations.',
    appgithublink: 'https://github.com/adedotxn/block-party',
    applivelink: 'https://the-blockparty.vercel.app/invite/P15Ry1',
    appstack: ['Typescript', 'Nextjs', 'React-Router', 'Chart.js'],
  },
  {
    appname: 'Portfolio',
    appimage: portfolioimg,
    appdesc:
      'Built to mimic the look and feel of the old windows 95 Operating system with page sections rendered as window applications',
    appgithublink: 'https://github.com/nottherealalanturing/portfolio',
    applivelink: 'https://www.nottherealalanturing.tech/',
    appstack: ['React', 'Redux'],
  },
  {
    appname: 'Crypto Bazaar',
    appimage: cryptobazaar,
    appdesc:
      'A mobile web app that uses the Coin-Cap API to display over a 1000 crypto currencies, their current values and graph of their changes over the recent days.',
    appgithublink: 'https://github.com/nottherealalanturing/cryptobazaar',
    applivelink: 'https://cryptobazaar.netlify.app/',
    appstack: ['React', 'Redux', 'React-Router', 'Chart.js'],
  },
  {
    appname: 'Blogger-API',
    appimage: events,
    appdesc: 'a RESTful API for managing posts.',
    appgithublink: 'https://github.com/nottherealalanturing/Blogger-API',
    applivelink: 'https://blogger-api-production.up.railway.app/api/docs/',
    appstack: ['Nodejs', 'PassportJS', 'Jest', 'MongoDB'],
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
