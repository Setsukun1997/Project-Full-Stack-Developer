import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => (
  <div>
    <span
      style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
      onClick={() => onToggle(task._id, task.completed)}
    >
      {task.title}
    </span>
    <button onClick={() => onDelete(task._id)}>❌</button>
  </div>
);

export default TaskItem;
