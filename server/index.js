const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("../config/db");

const app = express();
const port = process.env.PORT || 3000;

// Mongoose Config
mongoose.set("strictQuery", false);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect(dbConfig.db, dbConfig.options);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
}

connectToDatabase();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the recipe sharing platform!");
});
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/users", require("./routes/users"));
// app.use("/api/recipes", require("./routes/recipes"));

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
