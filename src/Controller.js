import { useState } from 'react';
import Input from 'input-material-ui';
import { HexColorPicker } from 'react-colorful';

const Controller = ({ apiUrl }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [url, setUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [color, setColor] = useState('#1dd35f');
  const [bgColor, setBgColor] = useState('#000000');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url) {
      return alert('Please at least supply a url to encode...');
    }

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({ title, subtitle, url, imageUrl, color, bgColor })
    }).catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: 16 }}>Update the Kiosk</h2>

      <h3>Data Options</h3>

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
        label="URL (QR code)"
        type="text"
        value={url}
        onChange={setUrl}
      />
      <br />

      <h3 style={{ marginTop: 32 }}>Theme Options</h3>

      <Input
        label="Image URL"
        type="text"
        value={imageUrl}
        onChange={setImageUrl}
      />
      <br />

      <h4>Text Color</h4>
      <HexColorPicker
        color={color}
        onChange={setColor}
      />
      <br />

      <h4>Background Color</h4>
      <HexColorPicker
        color={bgColor}
        onChange={setBgColor}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Controller;
