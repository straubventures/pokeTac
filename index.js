const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/pokeTac")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Could not connect to MongoDB", err));

//   mongoose
//   .connect("mongodb://localhost:27017/myapp", { useNewParser: true })
//   .then(() => console.log("Connected to MongoDB..."))
//   .catch(err => console.error("Could not connect to MongoDB..."));
app.use(express.json());

const port = process.env.port || 3000;

app.listen(port, () => console.log("Listening on port " + port + "..."));
