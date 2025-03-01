const mongoose = require("mongoose");
require("dotenv").config();
const mongodb_url = process.env.DB_STRING;

mongoose
  .connect(mongodb_url)
  .then((response) => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting database: ", err);
  });
