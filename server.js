require("dotenv").config();
require("./mongoose");
const express = require("express");
const methodOverride = require("method-override");
const app = express();
const PORT = 3000;
const userRoute = require("./routes/User");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// app.get("/", (req, res) => {
//   res.send(`Testing`);
// });

app.use("/", userRoute);

app.listen(PORT, () => console.log(`Listening @ ${PORT}`));
