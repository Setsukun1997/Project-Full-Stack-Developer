const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./mongoose'); 
const taskRoutes = require('./routes/task');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));














