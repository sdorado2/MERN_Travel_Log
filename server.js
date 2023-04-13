require("dotenv").config();
require("./mongoose");
const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// app.get("/", (req, res) => {
//   res.send(`Testing`);
// });

app.get("/", (req, res) => {
  res.render("Index");
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/", (req, res) => {});

app.listen(PORT, () => console.log(`Listening @ ${PORT}`));
