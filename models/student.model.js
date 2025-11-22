const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter student name"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },

    age: {
      type: Number,
      required: [true, "Please enter age"],
      min: [3, "Age must be at least 3"],
      max: [100, "Age too high"],
    },

    grade: {
      type: String,
      required: [true, "Please enter grade"],
      enum: ["A", "B", "C", "D", "E", "F"],
    },

    address: {
      type: String,
      required: [true, "Please enter address"],
    },

    phone: {
      type: String,
      required: [true, "Please enter phone number"],
      match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
