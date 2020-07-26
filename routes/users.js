// Get the Express Router.
const express = require("express");
const app = express.Router();

const users = [
  "Praveen Kumar",
  "Pooja Vyas",
  "Eddie Jaoude",
  "Jaynil Gaglani",
  "Raaghul K",
  "Saurabh Kumar"
];

app.use(express.json());

app.get("/", (req, res) => {
  res.json(users);
});
app.post("/", (req, res) => {
  if (!!req.body.name) {
    res.json(users.push(req.body.name) - 1);
  } else {
    res.status(400).json("You need to have name parameter in body.");
  }
});

module.exports = app;
