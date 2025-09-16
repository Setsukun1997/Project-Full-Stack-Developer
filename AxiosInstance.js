import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://project-full-stack-developer.onrender.com', // 🔗 Backend URL (Render)
  withCredentials: true,
});

export default instance;
