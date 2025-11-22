require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const authRoutes = require("./routes/auth.route.js");
const authMiddleware = require("./middleware/auth.js");

const app = express();

// dotenv.config();

let PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/auth", authRoutes);
app.use("/api", authMiddleware);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Running...");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database!");

  app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT} ...`);
  });
  })
  .catch((err) => {
    console.log("Connection failed!");
    console.error("Mongo connect error", err);
  });


