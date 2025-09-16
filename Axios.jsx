import axios from 'axios';
import { useEffect, useState } from 'react';

function IdeaList() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('https://your-backend-url.com/api/ideas', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setIdeas(res.data))
    .catch(err => console.error(err));
  }, []);

  const instance = axios.create({
  baseURL: 'https://project-full-stack-developer.onrender.com',
  withCredentials: true
});


  return (
    <div>
      {ideas.map(idea => (
        <div key={idea._id}>{idea.title}</div>
      ))}
    </div>
  );
}

