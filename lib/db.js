const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
  logging: console.log,
});

// Test the connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to MySQL database successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
};

const syncDB = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database tables synchronized!');
  } catch (error) {
    console.error('Error syncing database:', error);
    throw error;
  }
};

module.exports = { sequelize, connectDB, syncDB };
