const express = require("express");
const router = express.Router();
const Travel = require("../models/logEntry");

router.get("/", (req, res) => {
  Travel.find({}, (error, allTravels) =>
    res.render("Index", { log: allTravels })
  );
});

router.get("/new", (req, res) => {
  res.render("New");
});

router.post("/", (req, res) => {
  Travel.create(req.body, (error, createTravel) => {
    console.log("🚀  file: server.js:25  Log.create  createLog:", createTravel);
    res.redirect("/");
  });
});

router.get("/:id", (req, res) => {
  Travel.findById(req.params.id, (error, foundTravel) => {
    res.render("Show", { log: foundTravel });
  });
});

router.get("/:id/edit", (req, res) => {
  Travel.findById(req.params.id, (error, foundTravel) => {
    !error
      ? res.render("Edit", { log: foundTravel })
      : res.send({ msg: error.message });
  });
});

router.put("/:id", (req, res) => {
  Travel.findByIdAndUpdate(req.params.id, req.body, (error, updateTravel) => {
    console.log(updateTravel);
    res.redirect(`/${req.params.id}`);
  });
});

router.delete("/:id", (req, res) => {
  Travel.findByIdAndRemove(req.params.id, (error, deleteTravel) => {
    res.redirect("/");
  });
});

module.exports = router;
