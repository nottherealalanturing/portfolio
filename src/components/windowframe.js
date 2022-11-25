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
import {
  close,
  focusApp,
  minimize,
  fullscreen,
} from '../redux/taskbar/actions';

const WindowFrame = ({
  children,
  handleStart,
  handleDrag,
  handleStop,
  appname,
  icon,
  isminimize,
}) => {
  const dispatcher = useDispatch();
  const currentapp = useSelector((state) => state.taskbar[appname]);
  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 50, y: -190 }}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <div
        className={['window', styles.frame]}
        style={{
          zIndex: currentapp.top ? 1 : 0,
          display: isminimize ? 'block' : 'none',
        }}
      >
        <div className="title-bar">
          <div
            className="handle"
            onClick={() => dispatcher(focusApp(appname))}
            style={{
              width: '90%',
            }}
          >
            <div className="title-bar-text">
              <div className={styles.frametitle}>
                <img src={icon} alt={appname} className={styles.frameicon} />
                {appname}
              </div>
            </div>
          </div>
          <div
            style={{
              width: '10%',
            }}
          >
            <div className="title-bar-controls" style={{ display: 'block' }}>
              <button
                aria-label="Minimize"
                onClick={() => dispatcher(minimize(appname))}
                style={{ float: 'left' }}
              >
              </button>
              <button
                aria-label="Maximize"
                onClick={() => dispatcher(fullscreen(appname))}
                style={{ float: 'left' }}
              >
              </button>
              <button
                aria-label="Close"
                onClick={() => dispatcher(close(appname))}
              >
              </button>
            </div>
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
  isminimize: PropTypes.bool.isRequired,
};

export default WindowFrame;
