require("dotenv").config();
require("./mongoose");
const express = require("express");
const app = express();
const PORT = 3000;
const Travel = require("./models/logEntry");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: true }));

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
  Travel.findById(req.params.id, (error, findTravel) => {
    res.render("Show");
  });
});

app.listen(PORT, () => console.log(`Listening @ ${PORT}`));
blank;
