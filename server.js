require("dotenv").config();
require("./mongoose");
const express = require("express");
const methodOverride = require("method-override");
const app = express();
const PORT = 3000;
const Travel = require("./models/logEntry");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// app.get("/", (req, res) => {
//   res.send(`Testing`);
// });

app.get("/", (req, res) => {
  Travel.find({}, (error, allTravels) =>
    res.render("Index", { log: allTravels })
  );
});

app.get("/new", (req, res) => {
  res.render("New");
});

app.post("/", (req, res) => {
  Travel.create(req.body, (error, createTravel) => {
    console.log("🚀  file: server.js:25  Log.create  createLog:", createTravel);
    res.redirect("/");
  });
});

app.get("/:id", (req, res) => {
  Travel.findById(req.params.id, (error, foundTravel) => {
    res.render("Show", { log: foundTravel });
  });
});

app.get("/:id/edit", (req, res) => {
  Travel.findById(req.params.id, (error, foundTravel) => {
    !error
      ? res.render("Edit", { log: foundTravel })
      : res.send({ msg: error.message });
  });
});

app.put("/:id", (req, res) => {
  Travel.findByIdAndUpdate(req.params.id, req.body, (error, updateTravel) => {
    console.log(updateTravel);
    res.redirect(`/${req.params.id}`);
  });
});

app.delete("/:id", (req, res) => {
  Travel.findByIdAndRemove(req.params.id, (error, deleteTravel) => {
    res.redirect("/");
  });
});

app.listen(PORT, () => console.log(`Listening @ ${PORT}`));
