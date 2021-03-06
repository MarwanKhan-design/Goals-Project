// Import Libraries
const path = require("path");
const express = require("express");
require("dotenv").config();
require("colors");
const cors = require("cors");

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
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

// Serve Frontend

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("*", (req, res) => res.send("Please Set To Production"));
}

app.use(errorHandler);

app.listen(port, () => {
  console.log("Server started on port " + port);
});
