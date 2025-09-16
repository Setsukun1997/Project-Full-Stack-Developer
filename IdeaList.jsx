import React, { useEffect, useState } from 'react';
import axios from './Axios';

const IdeaList = () => {
  const [ideas, setIdeas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('/api/ideas', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => setIdeas(res.data))
    .catch(err => {
      console.error('Error fetching ideas:', err);
      setError('Failed to load ideas');
    });
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Your Ideas</h2>
      {ideas.length === 0 ? (
        <p>No ideas found.</p>
      ) : (
        ideas.map(idea => (
          <div key={idea._id}>{idea.title}</div>
        ))
      )}
    </div>
  );
};

export default IdeaList;


export default IdeaList;

