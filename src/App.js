import usePatchbay from './usePatchbay';

const { REACT_APP_PATCHBAY_PUBSUB_KEY } = process.env;
const PATCHBAY_URL = `https://patchbay.pub/pubsub/${REACT_APP_PATCHBAY_PUBSUB_KEY}?persist=true`;

const App = () => {
  const { data, error } = usePatchbay(PATCHBAY_URL);

  console.log({ error });

  return (
    <div>
      <h1>Spotify Group Session Kiosk</h1>
      <h2>{data}</h2>
    </div>
  );
}

export default App;
