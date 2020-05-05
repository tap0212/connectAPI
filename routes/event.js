const express = require("express");
const router = express.Router();

const {
  getEventById,
  createEvent,
  getEvent,
  photo,
  updateEvent,
  deleteEvent,
  getAllEvents,
  getAllUniqueCategories
} = require("../controllers/event");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);
router.param("eventId", getEventById);

//all of actual routes
//create route
router.post(
  "/event/create/:userId",
  isSignedIn,
  isAuthenticated,
  createEvent
);

// read routes
router.get("/event/:eventId", getEvent);
router.get("/event/photo/:eventId", photo);

//delete route
router.delete(
  "/event/:eventId/:userId",
  isSignedIn,
  isAuthenticated,
  deleteEvent
);

//update route
router.put(
  "/event/:eventId/:userId",
  isSignedIn,
  isAuthenticated,
  updateEvent
);

//listing route
router.get("/events", getAllEvents);

router.get("/events/categories", getAllUniqueCategories);

module.exports = router;
