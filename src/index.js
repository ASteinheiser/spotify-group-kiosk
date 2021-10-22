import React from 'react';
import ReactDOM from 'react-dom';
import querystring from 'query-string';
import sha256 from 'js-sha256';

import Kiosk from './Kiosk';
import Controller from './Controller';
import './index.css';

const Router = () => {
  const { pathname, search } = window.location;
  const query = querystring.parse(search);

  let patchbayKey = query.token;
  if (!patchbayKey) {
    console.log(sha256(Math.random().toString()));
  }

  const patchbayUrl = `https://patchbay.pub/pubsub/${patchbayKey}`;

  console.log({ patchbayUrl });

  if (pathname === '/') {
    return <Kiosk apiUrl={`${patchbayUrl}?persist=true`} />;
  }
  if (pathname === '/admin') {
    return <Controller apiUrl={patchbayUrl} />;
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
