const express = require("express");
const Booking = require("../models/Booking");
const Event = require("../models/Event");
const { auth, requireRole } = require("../middleware/auth");

const router = express.Router();

// POST /api/bookings
// Body: { eventId, tickets, name, email, phone, requirements }
router.post("/", auth(true), async (req, res, next) => {
  try {
    const { eventId, tickets, name, email, phone, requirements } = req.body || {};

    if (!eventId || !tickets || !name || !email) {
      return res.status(400).json({ message: "Missing required booking fields" });
    }

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    const qty = Number(tickets);
    if (!Number.isFinite(qty) || qty <= 0) {
      return res.status(400).json({ message: "Invalid tickets quantity" });
    }

    if (event.seatsAvailable < qty) {
      return res.status(400).json({ message: "Not enough seats available" });
    }

    const subtotal = event.price * qty;
    const serviceFee = Math.round(subtotal * 0.05);
    const total = subtotal + serviceFee;

    const booking = await Booking.create({
      user: req.user.id,
      event: event._id,
      tickets: qty,
      total,
      name,
      email,
      phone,
      requirements,
      status: "confirmed",
    });

    // decrement available seats
    event.seatsAvailable -= qty;
    await event.save();

    res.status(201).json({
      booking: await booking.populate("event"),
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/bookings/me - current user's bookings
router.get("/me", auth(true), async (req, res, next) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .populate("event");
    res.json({
      bookings: bookings.map((b) => b.toJSON()),
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/bookings/organizer - aggregate stats for organizer events
router.get("/organizer", auth(true), requireRole("organizer", "admin"), async (req, res, next) => {
  try {
    const bookings = await Booking.find()
      .sort({ createdAt: -1 })
      .populate("event")
      .populate("user");
    res.json({
      bookings: bookings.map((b) => b.toJSON()),
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/bookings/admin - admin view of all bookings
router.get("/admin", auth(true), requireRole("admin"), async (req, res, next) => {
  try {
    const bookings = await Booking.find()
      .sort({ createdAt: -1 })
      .populate("event")
      .populate("user");
    res.json({
      bookings: bookings.map((b) => b.toJSON()),
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

