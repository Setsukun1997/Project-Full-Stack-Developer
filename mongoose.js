// mongoose.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI=mongodb+srv://Setsukino:Setsu1652@cluster0.dnrspqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
};

module.exports = connectDB;

