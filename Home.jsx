import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🧠 Idea Vault</h1>
      <p>Welcome to your personal vault of ideas, questions, and discoveries.</p>
      <p>This site lets you store, view, and edit your thoughts about science, philosophy, or anything you’re curious about.</p>
      <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
}

export default Home;
