import React, { useEffect, useState } from 'react';
import IdeaItem from './IdeaItem';

function IdeaList() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:2222/api/ideas')
      .then((res) => res.json())
      .then((data) => setIdeas(data));
  }, []);

  return (
    <div>
      <h2>Stored Ideas</h2>
      {ideas.map((idea) => (
        <IdeaItem key={idea._id} idea={idea} />
      ))}
    </div>
  );
}

export default IdeaList;
