import { useState } from 'react';
import Input from 'input-material-ui';

const Controller = ({ apiUrl }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [url, setUrl] = useState('');
  const [color, setColor] = useState('');
  const [bgColor, setBgColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url) {
      return alert('Please at least supply a url to encode...');
    }

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({ title, subtitle, url, color, bgColor })
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
        label="Subtitle"
        type="text"
        value={subtitle}
        onChange={setSubtitle}
      />
      <br />
      <Input
        label="URL"
        type="text"
        value={url}
        onChange={setUrl}
      />
      <br />
      <Input
        label="Text Color"
        type="text"
        value={color}
        onChange={setColor}
      />
      <br />
      <Input
        label="Background Color"
        type="text"
        value={bgColor}
        onChange={setBgColor}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Controller;
