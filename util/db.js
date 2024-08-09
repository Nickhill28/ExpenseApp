const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expense_app', 'root', 'Nick@root21', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;