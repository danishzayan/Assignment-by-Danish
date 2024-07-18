var express = require("express");
var router = express.Router();
var { createBooking, signup, addTrain } = require("../middlewares/create");
const {
  createAdmin,
  authenticateAdmin,
  requireAdmin,
} = require("../middlewares/auth");
const client = require("../middlewares/connection");

// for home page
router.get("/", function (req, res, next) {
  res.render("index", { title: "IRCTC API" });
});

// Registeration for new user endpoint
router.post("/api/signup", function (req, res) {
  const username = req.body.username;
  const pass = req.body.password;
  const email = req.body.email;

  signup(username, pass, email, res);
});

// Login for existing user endpoint
router.post("/api/login", function (req, res) {
  // get login details and check login validity.
  res.json({
    status: "Logged in successfully",
    status_code: 200,
    user_id: "12345",
    access_token: "adsklfjieoafndakslfjadklsahf",
  });
});

// Add a new train to database endpoint
router.post("/api/trains/create", (req, res) => {
  addTrain(
    req.body.train_name,
    req.body.source,
    req.body.destination,
    req.body.seat_capacity,
    req.body.arrival_time_at_source,
    req.body.arrival_time_at_destination,
    res
  );
});

//Get seat availability endpoint
router.get("/api/trains/availability", (req, res) => {
  const source = req.params.source;
  const dest = req.params.destination;

  console.log(source + " " + dest);

  res.send({
    train_id: "23423123",
    train_name: "Express train",
    available_seats: 75,
  });
  
});

module.exports = router;
