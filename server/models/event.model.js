const mongoose = require("mongoose");
const { Schema } = mongoose;

const Articles = new Schema(
  {
    bookedTo: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "An Event must have name"],
    },
    date: {
      type: String,
      required: [true, "An Event must have date"],
    },

    day: {
      type: String,
      required: [true, "An Event must have date"],
    },

    time: {
      type: String,
      required: [true, "An Event must have time"],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("events", Articles);
