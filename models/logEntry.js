const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    img: { type: String, require: true },
    title: { type: String, require: true },
    date: { type: String, require: true },
    summary: { type: String, require: true },
  },
  { timestamps: true }
);

const Travel = mongoose.model("Travel", logSchema);

module.exports = Travel;
