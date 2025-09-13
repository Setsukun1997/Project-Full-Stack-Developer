import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://your-backend-url/api/tasks')
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  const addTask = (title) => {
    axios.post('https://your-backend-url/api/tasks', { title })
      .then(res => setTasks([...tasks, res.data]));
  };

  const toggleTask = (id, completed) => {
    axios.put(`https://your-backend-url/api/tasks/${id}`, { completed: !completed })
      .then(res => {
        setTasks(tasks.map(task => task._id === id ? res.data : task));
      });
  };

  const deleteTask = (id) => {
    axios.delete(`https://your-backend-url/api/tasks/${id}`)
      .then(() => setTasks(tasks.filter(task => task._id !== id)));
  };

  return (
    <div>
      <h1>📋 Task Manager</h1>
      <TaskForm onAdd={addTask} />
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
};

export default Dashboard;
