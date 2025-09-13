import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [idea, setIdea] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:2222/api/ideas/${id}`)
      .then((res) => res.json())
      .then((data) => setIdea(data));
  }, [id]);

  if (!idea) return <p>Loading...</p>;

  return (
    <div>
      <h2>🧠 Idea Detail</h2>
      <p><strong>ID:</strong> {idea._id}</p>
      <p><strong>Text:</strong> {idea.text}</p>
      <p><strong>Created:</strong> {new Date(idea.createdAt).toLocaleString()}</p>
    </div>
  );
}

export default Detail;
