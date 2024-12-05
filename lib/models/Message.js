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
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = Message;
