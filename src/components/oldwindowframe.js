/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Rnd } from 'react-rnd';
import '98.css';

const WindowFrame = ({ children }) => (
  <Rnd
    default={{
      x: 150,
      y: 205,
      width: 500,
      height: 190,
    }}
    minWidth={500}
    minHeight={190}
    bounds="window"
  >
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">A Window With Stuff In It</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body" style={{ cursor: 'default' }}>
        {children}
      </div>
    </div>
  </Rnd>
);

export default WindowFrame;
