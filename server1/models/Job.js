const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Job = sequelize.define('User', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    employmentType: {
        type: DataTypes.ENUM('full-time', 'part-time', 'contract', "internship", 'locum'),
        allowNull: false
    },
    requirements: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    jobLevel: {
        type: DataTypes.ENUM('entry', 'mid', 'senior', "director"),
        allowNull: false
    },
    jobLevel: {
        type: DataTypes.ENUM('entry', 'mid', 'senior', "director"),
        allowNull: false
    },
}, {
    timestamps: true,
    tableName: 'jobs'
})
module.exports = Job;