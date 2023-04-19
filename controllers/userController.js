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

    let lat = "";
    let lon = "";

    const getCoord = async () => {
      const response = await axios
        .get(`https://geocode.maps.co/search?q=${area.city}+${area.country}`)
        .then((res) => {
          console.log(`response : ${res.data}`);
          return res.data;
        });
      console.log(response);
      lat = response[0].lat;
      console.log("🚀  file: userController.js:48  getCoord  lat:", lat);
      lon = response[0].lon;
      console.log("🚀  file: userController.js:50  getCoord  lon:", lon);
    };

    getCoord();

    travel.geo.push(area._id);
    area.latitude = lat;

    await travel.save();
    await area.save();

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
