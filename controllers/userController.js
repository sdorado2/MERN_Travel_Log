const Travel = require("../models/logEntry");
const Location = require("../models/location");
const axios = require("axios");
const { response } = require("express");

const getAllLogs = (req, res) => {
  Travel.find({}, (error, allTravels) =>
    res.render("Index", { log: allTravels })
  );
};

const newLogPage = (req, res) => res.render("New");

const createNewLog = async (req, res) => {
  // Travel.create(req.body, (error, createTravel) => {
  //   console.log("🚀  file: server.js:25  Log.create  createLog:", createTravel);
  //   res.redirect("/");
  // });
  try {
    console.log(req.body);

    const travel = await Travel.create({
      img: req.body.img,
      title: req.body.title,
      date: req.body.date,
      summary: req.body.summary,
    });

    const area = await Location.create({
      city: req.body.city,
      country: req.body.country,
    });

    console.log(`area country : ${typeof area.country}`);

    const response = await axios
      .get(`https://geocode.maps.co/search?q=${area.city}+${area.country}`)
      .then((res) => {
        console.log(`response : ${res.data}`);
        return res.data;
      });
    console.log(response);
    area.latitude = response[0].lat;
    area.longitude = response[0].lon;
    await area.save();

    const getWeather = await axios
      .get(
        `https://archive-api.open-meteo.com/v1/archive?latitude=${area.latitude}&longitude=${area.longitude}&start_date=${travel.date}&end_date=${travel.date}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=America%2FNew_York`
      )
      .then((res) => {
        return res.data;
      });

    console.log(getWeather);

    // const weather = await Weather.create({

    // })

    travel.geo.push(area._id);

    await travel.save();

    console.log(`results for travel : ${travel} and \narea : ${area}`);
    console.log(`area lat : ${area.latitude} and long : ${area.longitude} `);

    res.redirect("/");
  } catch (error) {
    res.send({ message: error.message });
  }
};

const findLog = (req, res) => {
  Travel.findById(req.params.id, (error, foundTravel) => {
    res.render("Show", { log: foundTravel });
  }).populate("geo");
};

const editLog = (req, res) => {
  Travel.findById(req.params.id, (error, foundTravel) => {
    !error
      ? res.render("Edit", { log: foundTravel })
      : res.send({ msg: error.message });
  });
};

const updateLog = (req, res) => {
  Travel.findByIdAndUpdate(req.params.id, req.body, (error, updateTravel) => {
    console.log(updateTravel);
    res.redirect(`/${req.params.id}`);
  });
};

const deleteLog = (req, res) => {
  Travel.findByIdAndRemove(req.params.id, (error, deleteTravel) => {
    res.redirect("/");
  });
};

module.exports = {
  getAllLogs,
  newLogPage,
  createNewLog,
  findLog,
  editLog,
  updateLog,
  deleteLog,
};
