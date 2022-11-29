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
  const xpos = Math.floor(Math.random() * (260 - 150 + 1) + 150);
  const ypos = -Math.floor(Math.random() * (200 - 190 + 1) + 190);
  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{
        x: xpos,
        y: ypos,
      }}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <div
        className="window"
        style={{
          position: 'relative',
          borderTop: '2px solid #fafafa',
          borderRight: '1px solid #5a5a5a',
          borderBottom: '1px solid #5a5a5a',
          zIndex: currentapp.top ? 1 : 0,
          display: isminimize ? 'block' : 'none',
          width: currentapp.fullscreen ? '100vw' : '500px',
          height: currentapp.fullscreen ? 'calc (100vh - 36px)' : '500px',
          overflow: 'auto',
        }}
      >
        <div className="title-bar">
          <div
            onClick={() => dispatcher(focusApp(appname))}
            style={{
              width: '90%',
            }}
            aria-hidden="true"
            className="handle"
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
                type="button"
              />
              <button
                aria-label="Maximize"
                onClick={() => dispatcher(fullscreen(appname))}
                style={{ float: 'left' }}
                type="button"
              />
              <button
                aria-label="Close"
                onClick={() => dispatcher(close(appname))}
                type="button"
              />
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
