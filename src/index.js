import React from 'react';
import ReactDOM from 'react-dom';

import Kiosk from './Kiosk';
import Controller from './Controller';
import './index.css';

const { REACT_APP_PATCHBAY_PUBSUB_KEY } = process.env;
const PATCHBAY_URL = `https://patchbay.pub/pubsub/${REACT_APP_PATCHBAY_PUBSUB_KEY}`;

const Router = () => {
  const { pathname } = window.location;

  if (pathname === '/') {
    return <Kiosk apiUrl={`${PATCHBAY_URL}?persist=true`} />;
  }
  if (pathname === '/admin') {
    return <Controller apiUrl={PATCHBAY_URL} />;
  }
  // redirect to base url if no match
  window.location.href = '/';
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
