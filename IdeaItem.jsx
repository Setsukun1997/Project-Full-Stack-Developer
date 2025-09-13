import React from 'react';

function IdeaItem({ idea }) {
  return (
    <div style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc' }}>
      <p>{idea.text}</p>
    </div>
  );
}

export default IdeaItem;
