// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectDB } = require("./config/db"); 
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/tasks", taskRoutes);


app.get("/", (req, res) => {
  res.send("Backend Running...");
});

const PORT = process.env.PORT || 5000;

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();