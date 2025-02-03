require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection options
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: true,
  w: 'majority'
};

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, mongoOptions)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
/* const gymRoutes = require('./routes/pending/gyms');
const classRoutes = require('./routes/pending/classes');
const membershipRoutes = require('./routes/pending/memberships');
const reservationRoutes = require('./routes/pending/reservations'); */

// Use routes
// Define a route for "/"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
/* app.use('/api/gyms', gymRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/memberships', membershipRoutes);
app.use('/api/reservations', reservationRoutes); */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
