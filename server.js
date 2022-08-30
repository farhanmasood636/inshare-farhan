const express = require("express");
const db = require("./config/db");
const path = require("path");
const app = express();

app.use(express.static("./public"));
app.use(express.json());

db();

// Templating Engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening On Port ${PORT}`);
});
