const express = require('express');
const app = express();
const sequelize = require('./util/db');


// Initialize Sequelize
sequelize.sync().then(() => {
    console.log('Database connected');
  }).catch(err => {
    console.error('Error connecting to database:', err);
  });
  
  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  // Routes
  const expenseRoutes = require('./routes/expense');
  app.use('/api/expenses', expenseRoutes);
  
  // Serve frontend
  app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});