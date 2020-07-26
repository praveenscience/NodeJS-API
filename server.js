// Import Express!
const express = require("express");
// Create an instance.
const app = express();
// Define a port.
const port = 3000;

// Define routes!
app.get("/", (req, res) => {
  res.json(0.1 + 0.2);
});

// Listen to the port.
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
