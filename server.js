// Import Express & Morgan!
const express = require("express");
const morgan = require("morgan");
// Create an instance.
const app = express();
// Define a port.
const port = 3000;

// Add middleware.
app.use(morgan("dev"));

// Define routes!
app.get("/", (req, res) => {
  res.json(0.1 + 0.2);
});

// Listen to the port.
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
