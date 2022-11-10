import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/combineReducers';

// Styles
import './Adaptive.less';

const store = createStore(allReducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
