// Get the Express Router.
const express = require("express");
const app = express.Router();

// Show the routes.
app.get("/", (req, res) => {
  res.json("Hello World!");
});
app.post("/", (req, res) => {
  res.status(405).json("Don't POST here!");
});

module.exports = app;
