const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  uploadTask,
  getMyTasks,   
  getAllTasks,  
  updateStatus,
} = require("../controllers/taskController");

// upload task
router.post("/upload", verifyToken, upload.single("file"), uploadTask);

// student - my tasks
router.get("/my-tasks", verifyToken, getMyTasks);

// admin - all tasks
router.get("/all", verifyToken, getAllTasks);

router.put("/status", verifyToken, updateStatus);

module.exports = router;