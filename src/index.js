import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TagManager from 'react-gtm-module';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

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
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
