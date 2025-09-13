import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://your-backend-url/api/tasks')
      .then(res => setTasks(res.data));
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map(task => (
        <div key={task._id}>
          <span>{task.title}</span>
        </div>
      ))}
    </div>
  );
}
export default Dashboard;
