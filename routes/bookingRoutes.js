// routes/bookingRoutes.js
const express = require('express');
const { authMiddleware } = require('../utils/authMiddleware');
const { createBooking, getBookingsByUser } = require('../models/Booking');

const router = express.Router();

// Crear una reserva
router.post('/', authMiddleware, async (req, res) => {
  const { date, timeSlot } = req.body;
  const userId = req.user.id;

  try {
    const booking = await createBooking(userId, date, timeSlot);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear reserva' });
  }
});

// Ver reservas del usuario actual
router.get('/mine', authMiddleware, async (req, res) => {
  const userId = req.user.id;

  try {
    const bookings = await getBookingsByUser(userId);
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener reservas' });
  }
});

module.exports = router;
