// Import Libraries
const express = require("express");
require("dotenv").config();
require("colors");

// Import Middleware
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

// Import Routes
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/UserRoutes");

const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log("Server started on port " + port);
});
