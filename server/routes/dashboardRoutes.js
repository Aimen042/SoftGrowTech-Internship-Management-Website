const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const isAdmin = require("../middleware/adminMiddleware");

// STUDENT ROUTE
router.get(
  "/student-dashboard",
  verifyToken,
  (req, res) => {
    res.json({
      message: "Welcome Student Dashboard",
      user: req.user,
    });
  }
);

// ADMIN ROUTE
router.get(
  "/admin-dashboard",
  verifyToken,
  isAdmin,
  (req, res) => {
    res.json({
      message: "Welcome Admin Dashboard",
      user: req.user,
    });
  }
);

module.exports = router;