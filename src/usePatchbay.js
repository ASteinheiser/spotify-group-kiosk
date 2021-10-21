import { useCallback, useEffect, useState } from 'react';
import https from 'https';

const usePatchbay = (url) => {
  const [data, setData] = useState('');
  const [error, setError] = useState(undefined);

  const handleNewMessage = useCallback((dataBuffer) => {
    try {
      setData(dataBuffer.toString());
    } catch (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    https
      .get(url, (res) => res.on('data', handleNewMessage))
      .on('error', setError);
  }, [handleNewMessage, url]);

  return { data, error };
}

export default usePatchbay;
