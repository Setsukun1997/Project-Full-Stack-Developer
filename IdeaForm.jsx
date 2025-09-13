import React, { useState } from 'react';

function IdeaForm() {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:2222/api/ideas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your idea..."
      />
      <button type="submit">Add Idea</button>
    </form>
  );
}

export default IdeaForm;
