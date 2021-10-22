import QRCode from 'react-qr-code';

import usePatchbay from './usePatchbay';

const Kiosk = ({ apiUrl }) => {
  const { data, error } = usePatchbay(apiUrl);

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
