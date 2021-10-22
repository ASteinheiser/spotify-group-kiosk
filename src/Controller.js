import { useState } from 'react';
import Input from 'input-material-ui';

const Controller = ({ apiUrl }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url) {
      return alert('Please at least supply a url to encode...');
    }

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({ title, body, url })
    }).catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update the Kiosk</h2>

      <Input
        label="Title"
        type="text"
        value={title}
        onChange={setTitle}
      />
      <br />
      <Input
        label="Body"
        type="text"
        value={body}
        onChange={setBody}
      />
      <br />
      <Input
        label="URL"
        type="text"
        value={url}
        onChange={setUrl}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Controller;
