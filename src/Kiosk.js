import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

import usePatchbay from './usePatchbay';

const Kiosk = ({ apiUrl, adminUrl }) => {
  const [initialized, setInitialized] = useState(false);
  const { data, error } = usePatchbay(apiUrl);

  useEffect(() => {
    if (!initialized && !data && !error) {
      setInitialized(true);
      fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({
          title: 'Setup Spotify Group Session',
          body: 'Scan the QR code below to change this page!',
          url: adminUrl,
        })
      }).catch(console.error);
    }
  }, [adminUrl, apiUrl, data, error, initialized]);

  return (
    <div id='wrapper'>
      <img alt='spotify-spin' src='/spotify-spin.gif' />

      {error && <h1>{error.message}</h1>}

      {data?.title && (<h1>{data.title}</h1>)}

      {data?.body && (<h2>{data.body}</h2>)}

      {data?.url && (
        <QRCode
          id="qr-code"
          value={data.url}
          bgColor={'#000000'}
          fgColor={'#1dd35f'}
          size={256}
        />
      )}
    </div>
  );
}

export default Kiosk;
