// models/Booking.js
const pool = require('../config/db');

const createBooking = async (userId, date, timeSlot) => {
  const result = await pool.query(
    'INSERT INTO bookings (user_id, date, time_slot) VALUES ($1, $2, $3) RETURNING *',
    [userId, date, timeSlot]
  );
  return result.rows[0];
};

const getBookingsByUser = async (userId) => {
  const result = await pool.query('SELECT * FROM bookings WHERE user_id = $1', [userId]);
  return result.rows;
};

module.exports = {
  createBooking,
  getBookingsByUser,
};
