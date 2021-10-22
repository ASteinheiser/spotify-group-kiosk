import { useState } from 'react';

const Controller = ({ apiUrl }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body || !url) {
      return alert('Please fill out all fields');
    }

    console.log('publishing!')
    // publish message
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <input
          placeholder="Body"
          type="text"
          value={body}
          onChange={({ target }) => setBody(target.value)}
        />
        <input
          placeholder="URL"
          type="text"
          value={url}
          onChange={({ target }) => setUrl(target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Controller;
