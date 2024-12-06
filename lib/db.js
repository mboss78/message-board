require('dotenv').config({ path: '../.env.local' }); // Load environment variables

const { Sequelize } = require('sequelize');

// Create a new Sequelize instance using environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    port: process.env.DB_PORT,
    logging: console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD), // Optional: Logs SQL queries for debugging
});

// Function to test the database connection
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to MySQL database successfully!');
    } catch (error) {
        console.error('Database connection error:', error.message);
        throw error;
    }
};

const syncDB = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('Database tables synchronized!');
    } catch (error) {
        console.error('Error syncing database:', error.message);  // Log the actual error message
        console.error(error.stack);  // Log stack trace for more details
        throw error;
    }
};

module.exports = { sequelize, connectDB, syncDB };