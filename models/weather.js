const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema(
  {
    date: { type: String },
    weathercode: { type: String },
    temperatureMax: { type: String },
    temperatureMin: { type: String },
  },
  { timestamps: true }
);

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;
