// config/db.js
const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const db = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // necesario para PostgreSQL en Railway
  }
});

module.exports = db;
