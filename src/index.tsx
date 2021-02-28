import React from 'react';
import ReactDOM from 'react-dom';
// Config store redux
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// Component
import App from './App';
import store from './app/store';
// Config i18n
import './i18n/i18n';
import './index.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
