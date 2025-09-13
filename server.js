const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

const connectDB = require('./mongoose');
connectDB();


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/tasks', require('./routes/tasks'));

app.listen(3000, () => console.log('Server running on port 3000'));


