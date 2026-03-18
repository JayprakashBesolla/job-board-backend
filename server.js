
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/jobs", jobRoutes);

// MongoDB connection
mongoose.connect("mongodb+srv://besollajayprakash_db_user:Jayprakash14@cluster0.ymzvs86.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});