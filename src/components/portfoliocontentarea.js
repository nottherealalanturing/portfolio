import React from 'react';
import {
  todo,
  cryptobazaar,
  spacetraveller,
  pokeyverse,
  portfolioimg,
  events,
} from '../assets/portfolio';
import PortfolioItem from './portfolioitem';
import styles from './styles/portfoliocontentarea.module.css';

const projects = [
  {
    appname: 'Todo',
    appimage: todo,
    appdesc: 'A minimalist todo app bundled with webpack.',
    appgithublink: 'https://github.com/nottherealalanturing/todo',
    applivelink: 'https://nottherealalanturing.github.io/todo/',
    appstack: ['HTML', 'CSS', 'Webpack', 'JavaScript'],
  },
  {
    appname: 'Crypto Bazaar',
    appimage: cryptobazaar,
    appdesc:
      'A mobile app that uses the Coin-Cap API to display over a 1000 crypto currencies, their current values and graph of their changes over the recent days.',
    appgithublink: 'https://github.com/nottherealalanturing/cryptobazaar',
    applivelink: 'https://cryptobazaar.netlify.app/',
    appstack: ['React', 'Redux', 'React-Router', 'Chart.js'],
  },
  {
    appname: "Space Traveller's Hub",
    appimage: spacetraveller,
    appdesc:
      'A web app that consumes SpaceX API to display the list of available Rockets and Missions. Users can reserve missions or rockets.',
    appgithublink:
      'https://github.com/nottherealalanturing/space-travelers-hub',
    applivelink: 'https://space-travels-app.netlify.app/',
    appstack: ['React', 'Redux', 'React-Router', 'Sass'],
  },
  {
    appname: 'Pokeyverse',
    appimage: pokeyverse,
    appdesc: 'A website bundled with web pack that renders pokemon characters.',
    appgithublink: 'https://nottherealalanturing.github.io/Pokeyverse',
    applivelink: 'https://nottherealalanturing.github.io/Pokeyverse/',
    appstack: ['HTML', 'CSS', 'Axios', 'JavaScript'],
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
