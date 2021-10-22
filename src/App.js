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

      {Boolean(data?.url) && <QRCode value={data.url} />}
    </div>
  );
}

export default App;
