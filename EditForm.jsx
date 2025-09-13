import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(`http://localhost:2222/api/ideas/${id}`)
      .then((res) => res.json())
      .then((data) => setText(data.text));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:2222/api/ideas/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    navigate(`/detail/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Idea</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '300px', marginRight: '1rem' }}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditForm;
