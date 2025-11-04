const express = require('express');
const app = express();
const usersRoutes = require('./Routes/users');
const port = 8080;
const mongoose = require('mongoose');

app.use(express.json());
app.use('/api/users', usersRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/fullstackDB')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.listen(port, ()=>{
  console.log(`http://localhost:${port}`);
});