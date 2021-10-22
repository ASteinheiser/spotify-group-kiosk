import querystring from 'query-string';
import sha256 from 'js-sha256';

import Kiosk from './Kiosk';
import Controller from './Controller';

const createPatchbayUrl = token => `https://patchbay.pub/pubsub/${token}`;

const Router = () => {
  const { pathname, search, hostname, port } = window.location;
  const query = querystring.parse(search);

  let patchbayKey = query.token;
  if (!patchbayKey) {
    const newToken = sha256(Math.random().toString());
    window.history.replaceState(null, '', `http://${hostname}:${port}?token=${newToken}`)

    setTimeout(() => {
      fetch(createPatchbayUrl(newToken), {
        method: 'POST',
        body: JSON.stringify({
          title: 'Setup Spotify Group Session',
          body: 'Scan the QR code below to change this page!',
          url: `http://${hostname}:${port}/admin?token=${newToken}`,
        })
      }).catch(console.error);
    }, 10)
  }

  if (pathname === '/') {
    return <Kiosk apiUrl={`${createPatchbayUrl(patchbayKey)}?persist=true`} />;
  }
  if (pathname === '/admin') {
    return <Controller apiUrl={createPatchbayUrl(patchbayKey)} />;
  }
  // redirect to base url if no match
  window.location.href = '/';
}

export default Router;
