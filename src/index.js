import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TagManager from 'react-gtm-module';
import App from './App';

const tagManagerArgs = {
  gtmId: 'GTM-M9NC9LX',
  dataLayer: {
    userId: '001',
    userProject: 'nottherealalanturing',
  },
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
