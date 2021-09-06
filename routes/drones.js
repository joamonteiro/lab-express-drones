const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get('/drones', async (req, res) => {
  // Iteration #2: List the drones
  // ... your code here
  const drones = await Drone.find();
    console.log(drones);
    res.render("drones/list", {drones});
});

router.get('/create', (req, res) => {
  // Iteration #3: Add a new drone
  // ... your code here
    res.render("drones/create-form");
});

router.post('/create', async (req, res) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name, propellers, maxSpeed} = req.body;
    await Drone.create({name, propellers, maxSpeed});
    res.redirect("/drones");
});

router.get('/drones/:id/edit', async (req, res) => {
  // Iteration #4: Update the drone
  // ... your code here
  const drone = await Drone.findByIdAndUpdate(req.params.id)
  res.render("drones/update-form", drone);
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {name, propellers, maxSpeed} = req.body;
  await Drone.findByIdAndUpdate(req.params.bookId, {
      name,
      propellers,
      maxSpeed,
  });
  res.redirect(`/drones`)
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  await Drone.findByIdAndDelete(req.params.id);
    res.redirect("/drones");
});

module.exports = router;
