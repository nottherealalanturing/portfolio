/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import '98.css';
import styles from './styles/windowframe.module.css';
import { focusApp } from '../redux/taskbar/actions';

const WindowFrame = ({
  children,
  handleStart,
  handleDrag,
  handleStop,
  appname,
  icon,
}) => {
  const dispatcher = useDispatch();
  const currentapp = useSelector((state) => state.taskbar[appname]);
  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <div
        className={['window', styles.frame]}
        onClick={() => dispatcher(focusApp(appname))}
        style={{
          zIndex: currentapp.top ? 1 : 0,
        }}
      >
        <div className="title-bar handle">
          <div className="title-bar-text">
            <div className={styles.frametitle}>
              <img src={icon} alt={appname} className={styles.frameicon} />
              {appname}
            </div>
          </div>
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
    </Draggable>
  );
};

WindowFrame.propTypes = {
  children: PropTypes.node.isRequired,
  handleStart: PropTypes.func.isRequired,
  handleDrag: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
  appname: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default WindowFrame;
