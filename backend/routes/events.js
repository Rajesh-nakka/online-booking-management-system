const express = require("express");
const Event = require("../models/Event");
const { auth, requireRole } = require("../middleware/auth");

const router = express.Router();

// GET /api/events
// Supports ?search=, ?category=
router.get("/", async (req, res, next) => {
  try {
    const { search, category } = req.query;
    const filter = {};

    if (search) {
      const pattern = new RegExp(String(search), "i");
      filter.$or = [
        { title: pattern },
        { city: pattern },
        { category: pattern },
        { tags: pattern },
      ];
    }

    if (category) {
      filter.category = category;
    }

    const events = await Event.find(filter).sort({ date: 1 });
    res.json({ events: events.map((e) => e.toJSON()) });
  } catch (err) {
    next(err);
  }
});

// GET /api/events/:id
router.get("/:id", async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ event: event.toJSON() });
  } catch (err) {
    next(err);
  }
});

// POST /api/events (organizer/admin)
router.post("/", auth(true), requireRole("organizer", "admin"), async (req, res, next) => {
  try {
    const payload = req.body || {};
    const event = await Event.create(payload);
    res.status(201).json({ event: event.toJSON() });
  } catch (err) {
    next(err);
  }
});

// PUT /api/events/:id (organizer/admin)
router.put("/:id", auth(true), requireRole("organizer", "admin"), async (req, res, next) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body || {}, {
      new: true,
      runValidators: true,
    });
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ event: event.toJSON() });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/events/:id (organizer/admin)
router.delete("/:id", auth(true), requireRole("organizer", "admin"), async (req, res, next) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

