import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

import usePatchbay from './usePatchbay';

const DEFAULT_COLOR = '#1dd35f';
const DEFAULT_BG_COLOR = '#000000';

const Kiosk = ({ apiUrl, adminUrl }) => {
  const [initialized, setInitialized] = useState(false);
  const { data, error } = usePatchbay(apiUrl);

  const color = data?.color || DEFAULT_COLOR;
  const bgColor = data?.bgColor || DEFAULT_BG_COLOR;

  const textStyles = {
    color,
    textShadow: `1px 1px 4px ${color}`,
  };

  useEffect(() => {
    if (!initialized && !data && !error) {
      setInitialized(true);
      fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({
          title: 'Setup Spotify Group Session',
          subtitle: 'Scan the QR code below to change this page!',
          url: adminUrl,
          imageUrl: '/spotify-spin.gif',
        })
      }).catch(console.error);
    }
  }, [adminUrl, apiUrl, data, error, initialized]);

  return (
    <div id='wrapper' style={{ background: bgColor }}>
      {data?.imageUrl && <img alt='spotify-spin' src={data.imageUrl} />}

      {error && <h1 style={textStyles}>{error.message}</h1>}

      {data?.title && <h1 style={textStyles}>{data.title}</h1>}

      {data?.subtitle && <h2 style={textStyles}>{data.subtitle}</h2>}

      {data?.url && (
        <QRCode
          id="qr-code"
          value={data.url}
          bgColor={bgColor}
          fgColor={color}
          size={256}
        />
      )}
    </div>
  );
}

export default Kiosk;
