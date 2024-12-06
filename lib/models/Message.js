const { DataTypes } = require('sequelize');
const { sequelize } = require('../db'); // Import sequelize instance

// Define the Message model
const Message = sequelize.define('Message', {
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
    timestamps: true, // Keep createdAt
    createdAt: 'created_at',  // Map createdAt to created_at in the database
    updatedAt: 'updated_at',  // Map updatedAt to updated_at in the databas
});

module.exports = Message;
