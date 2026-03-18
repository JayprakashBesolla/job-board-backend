const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const jobRoutes = require("./routes/jobRoutes"); // ✅ important

const app = express();

app.use(cors());
app.use(express.json());

// ✅ connect routes
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("Your API is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});