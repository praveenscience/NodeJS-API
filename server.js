// Import Express & Morgan!
const express = require("express");
const morgan = require("morgan");
// Create an instance.
const app = express();
// Define a port.
const port = 3000;
// Import all the routes.
const root = require("./routes/root");

// Add middleware.
app.use(morgan("dev"));
app.use("/", root);

// Listen to the port.
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
