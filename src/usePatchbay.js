import { useCallback, useEffect, useState } from 'react';
import https from 'https';

const usePatchbay = (url) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  const handleError = useCallback((error) => {
    setData(undefined);
    setError(error);
  }, []);

  const handleNewMessage = useCallback((dataBuffer) => {
    try {
      const dataObject = JSON.parse(dataBuffer.toString());
      setData(dataObject);
      setError(undefined);
    } catch (error) {
      console.error(error);
      handleError(new Error('Failed to parse JSON string...'));
    }
  }, [handleError]);

  useEffect(() => {
    https
      .get(`${url}?persist=true`, (res) => res.on('data', handleNewMessage))
      .on('error', handleError);
  }, [handleNewMessage, handleError, url]);

  return { data, error };
}

export default usePatchbay;
