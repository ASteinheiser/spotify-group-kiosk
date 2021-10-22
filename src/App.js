import QRCode from 'react-qr-code';

import usePatchbay from './usePatchbay';

const { REACT_APP_PATCHBAY_PUBSUB_KEY } = process.env;
const PATCHBAY_URL = `https://patchbay.pub/pubsub/${REACT_APP_PATCHBAY_PUBSUB_KEY}?persist=true`;

const App = () => {
  const { data, error } = usePatchbay(PATCHBAY_URL);

  if (error) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Spotify Group Session Kiosk</h1>

      <img alt='spotify-spin' src='/spotify-spin.gif' />

      {Boolean(data?.url) && (
        <QRCode
          value={data.url}
          bgColor={'#000000'}
          fgColor={'#1dd35f'}
          size={256}
        />
      )}
    </div>
  );
}

export default App;
