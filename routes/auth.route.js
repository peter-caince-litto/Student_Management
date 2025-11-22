const express = require("express");
const Users = require("../models/users.model.js");
const router = express.Router();
const {
  createUsers,
  login,
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/auth.controller.js");


router.post("/register", createUsers);
router.post("/login", login);

module.exports = router;