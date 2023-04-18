const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  latitude: { type: String },
  longitude: { type: String },
  city: { type: String },
  country: { type: String },
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
