const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.set("strictQuery", true);
mongoose.connect(mongoURI, { useUnifiedTopology: true });

db.on("open", () => console.log(`mongo connected :${mongoURI}`));
db.on("close", () => console.log(`mongo disconnected`));
db.on("error", (err) => console.log(`${err.message} is mongod mad?`));

module.exports = mongoose;
