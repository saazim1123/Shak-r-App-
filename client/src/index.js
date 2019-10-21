import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './react-selectize.css'

// // New files
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/react-selectize/themes/index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
