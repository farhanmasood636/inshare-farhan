const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "../config.env" });

function connectDB() {
  mongoose
    .connect(
      "mongodb+srv://farhanmasood:farhanch123@cluster0.zogjr8r.mongodb.net/file-sharing",
      {
        useNewUrlParser: true,
      }
    )
    .then((con) => {
      console.log("DATABASE CONNECTION SUCCESSFULL");
    });
}
module.exports = connectDB;
