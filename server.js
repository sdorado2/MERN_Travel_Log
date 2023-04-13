const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`Testing`);
});

app.listen(PORT, () => console.log(`Listening @ ${PORT}`));
