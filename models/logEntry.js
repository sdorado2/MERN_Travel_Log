const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    img: { type: String, require: true },
    title: { type: String, require: true },
    date: { type: String, require: true },
    summary: { type: String, require: true },
    geo: [{ type: mongoose.Schema.Types.ObjectId, ref: "Location" }],
    forecast: [{ type: mongoose.Schema.Types.ObjectId, ref: "Weather" }],
  },
  { timestamps: true }
);

const Travel = mongoose.model("Travel", logSchema);

module.exports = Travel;
