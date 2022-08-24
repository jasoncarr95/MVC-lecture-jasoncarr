// Basic Express app set up
const express = require("express");
const app = express();

// Require allows us to include modules from different files in our project
// connectDB is function exported in the file cofig/database
const connectDB = require("./config/database");

// set variables for routes based on imported file
const homeRoutes = require("./routes/home");
const todoRoutes = require("./routes/todos");

// Loads .env file contents into | `process.env`. Example: 'KEY=value'
require("dotenv").config({ path: "./config/.env" });

// call the imported function to connect to database
// shoutout travers, its his code
connectDB();

// EJS (sets the view engine as EJS)
app.set("view engine", "ejs");
// Lets us serve static files in public folder
app.use(express.static("public"));

// Body parser.. lets us pull shit from the request.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// which file to use based on route... if on home page ('/'), use the homeRoutes route (variable)
app.use("/", homeRoutes);
app.use("/todos", todoRoutes);

// Server
// use environment variable for the PORT
// allows you to later deploy (hosted by heroku, which will set their own port for their own servers)
app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
});