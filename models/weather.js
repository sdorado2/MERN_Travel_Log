const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  time: { type: String },
  weathercode: { type: String },
  temperatureMax: { type: String },
  temperatureMin: { type: String },
});

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;
