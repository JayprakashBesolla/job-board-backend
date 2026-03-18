const express = require("express");
const router = express.Router(); // ✅ VERY IMPORTANT
const Job = require("../models/Job");

// GET with search + filter + pagination
router.get("/", async (req, res) => {
  const { search, location, type, page = 1 } = req.query;

  let query = {};

  if (search && search.trim() !== "") {
  query.$or = [
    { title: { $regex: search, $options: "i" } },
    { company: { $regex: search, $options: "i" } },
    { location: { $regex: search, $options: "i" } }, // ✅ added
    { type: { $regex: search, $options: "i" } },     // ✅ added
  ];
}

  if (location) {
    query.location = location;
  }

  if (type) {
    query.type = type;
  }

  const limit = 5;

  const jobs = await Job.find(query)
    .skip((page - 1) * limit)
    .limit(limit);

  res.json(jobs);
});

// POST job
router.post("/", async (req, res) => {
  const job = new Job(req.body);
  const savedJob = await job.save();
  res.json(savedJob);
});

module.exports = router;