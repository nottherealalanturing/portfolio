import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import {
  close,
  focusApp,
  minimize,
  fullscreen,
  restorescreen,
} from '../redux/taskbar/actions';
import styles from './styles/frame.module.css';
import {
  closeicon,
  maximizeicon,
  minimizeicon,
  restoreicon,
} from '../assets/icons';

const MobileFrame = ({
  appname,
  appicon,
  isminimize,
  children,
  desktopheight,
  handleStart,
  handleDrag,
  handleStop,
}) => {
  const dispatcher = useDispatch();
  const currentapp = useSelector((state) => state.taskbar[appname]);
  const titlebarref = useRef(null);
  const [newheight, setNewHeight] = useState(0);
  useEffect(() => {
    setNewHeight(desktopheight - titlebarref.current.clientHeight);
  }, [newheight, desktopheight]);

  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{
        x: 0,
        y: 0,
      }}
      bounds="parent"
      grid={[10, 10]}
      scale={1}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <article
        className={styles.window}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: currentapp.top ? 1 : 0,
          display: isminimize ? 'none' : 'block',
        }}
      >
        <div className={styles.titlebar} ref={titlebarref}>
          <div
            className="handle"
            onClick={() => dispatcher(focusApp(appname))}
            onDoubleClick={() => dispatcher(fullscreen(appname))}
            aria-hidden="true"
            style={{
              textTransform: 'capitalize',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '5px',
              padding: '5px',
              color: '#fff',
              width: '100%',
              height: '100%',
            }}
          >
            <img src={appicon} alt={appname} className={styles.appicon} />
            {appname}
          </div>
          <div className={styles.framecontrols}>
            <button
              aria-label="Minimize"
              type="button"
              onClick={() => dispatcher(minimize(appname))}
            >
              <img src={minimizeicon} alt="close" />
            </button>
            {currentapp.fullscreen ? (
              <button
                aria-label="Restore"
                type="button"
                onClick={() => dispatcher(restorescreen(appname))}
              >
                <img src={restoreicon} alt="restore" />
              </button>
            ) : (
              <button
                aria-label="Maximize"
                type="button"
                onClick={() => dispatcher(fullscreen(appname))}
              >
                <img src={maximizeicon} alt="close" />
              </button>
            )}
            <button
              aria-label="Close"
              type="button"
              onClick={() => dispatcher(close(appname))}
            >
              <img src={closeicon} alt="close" />
            </button>
          </div>
        </div>
        <div
          className={styles.windowbody}
          style={{
            height: `${newheight}px`,
            minWidth: '352px',
            minHeight: `${newheight}px`,
            paddingRight: '5px',
            overflow: 'auto',
          }}
        >
          {children}
        </div>
      </article>
    </Draggable>
  );
};

MobileFrame.propTypes = {
  appname: PropTypes.string.isRequired,
  appicon: PropTypes.string.isRequired,
  isminimize: PropTypes.bool.isRequired,
  desktopheight: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  handleStart: PropTypes.func.isRequired,
  handleDrag: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
};

export default MobileFrame;
