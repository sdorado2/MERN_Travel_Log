require("dotenv").config();
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

app.listen(PORT, () => console.log(`Listening @ ${PORT}`));
