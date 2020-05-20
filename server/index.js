const express = require("express");
const mongoose = require("mongoose");
const { MONGODB, PORT } = require("./config/keys");

mongoose
  .connect(MONGODB.uri, MONGODB.options)
  .then((msg) => console.log("Database Connected"))
  .catch((err) => console.log(err));
mongoose.Promise = global.Promise;

const app = express();

app.use(express.json());

/*************ROUTES**************/
require("./routes")(app);

/*****STATIC FILES*******/

const path = require("path");
app.use(express.static("../client/build"));
//serve routes
app.get("*", (req, res) => {
  res.sendFile(path.resolve("../client", "build", "index.html"));
});

/*****STATIC FILES*******/

app.listen(PORT, function () {
  console.log(`Listening on port`, PORT);
});
