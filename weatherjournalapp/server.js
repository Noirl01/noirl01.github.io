// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 3000;
const server = app.listen(port, listening);

//Post Requests
// Recieve temp, date, note.
app.post("/", newRequest);

//Get Requests
// Sends All Data
app.get("/all", getData);

// Helper Functions
// IP & Port announce
function listening() {
  console.log(`Server is Running at Localhost:${port}`);
}

// Retrives temp data and comment
function newRequest(req, res) {
  newEntry = {
    temperature: req.body.temperature,
    date: req.body.date,
    response: req.body.response,
  };
  projectData.push(newEntry);
}
// Send back all cached entries
function getData(req, res) {
  res.send(projectData);
}
