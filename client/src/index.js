import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// if (window.location.protocol === 'http:') {
//   window.location.href = 'https://' + window.location.host;
// }

ReactDOM.render(
  <Auth0Provider
    domain="dev-xzphn2km.au.auth0.com"
    clientId="lYMTJ5wfVz7vFi3TBkKi4a4lnfaoWsOb"
    redirectUri={`${window.location.origin}/students`}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
