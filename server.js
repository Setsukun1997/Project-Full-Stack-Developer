const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./backend/config/mongoose');
const taskRoutes = require('./backend/routes/task');

const app = express();

app.use(cors({ origin: 'https://project-full-stack-developer.vercel.app', credentials: true }));
app.use(express.json());

connectDB();

app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('✅ Backend is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


