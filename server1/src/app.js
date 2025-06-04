const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors');
const User = require('../models/User');
const { sequelize } = require('../db');
const md = require('../models/User');
md.sequelize.sync({ alter: true });
//app.use(express.urlencoded({ extended: true }));

const app = express();

dotenv.config();

// // Middleware
// const corsOptions = {
//     origin: 'http://localhost:3000', // Allow requests from the frontend
//     methods: 'GET,POST,PUT,DELETE', // Allow these HTTP methods
//     allowedHeaders: 'Content-Type,Authorization' // Allow these headers
//   };

//   //ROUTES
// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//User Routes
const userRoutes = require('../routes/userRoute');
app.use('/api/users', userRoutes);

//Job Routes
const jobRoutes = require('../routes/jobRoute');
app.use('/api/jobs', jobRoutes);
//Chat Routes
const chatRoutes = require('../routes/chatRoute');
app.use('/api/chat', chatRoutes);

module.exports = app;