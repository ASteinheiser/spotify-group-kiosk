import querystring from 'query-string';
import sha256 from 'js-sha256';

import Kiosk from './Kiosk';
import Controller from './Controller';

const createPatchbayUrl = token => `https://patchbay.pub/pubsub/${token}`;

const Router = () => {
  const { pathname, search, hostname, port, protocol } = window.location;
  const domain = `${protocol}//${hostname}:${port}`;
  const query = querystring.parse(search);

  let patchbayKey = query.token;
  if (!patchbayKey) {
    patchbayKey = sha256(Math.random().toString());
    window.history.replaceState(null, '', `${domain}?token=${patchbayKey}`)

    setTimeout(() => {
      fetch(createPatchbayUrl(patchbayKey), {
        method: 'POST',
        body: JSON.stringify({
          title: 'Setup Spotify Group Session',
          body: 'Scan the QR code below to change this page!',
          url: `${domain}/admin?token=${patchbayKey}`,
        })
      }).catch(console.error);
    }, 10);
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
