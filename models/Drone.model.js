// Iteration #1
const mongoose = require("mongoose");

const droneSchema = mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
},
{
    timestamps:true,
})

const Drone = mongoose.model("Drone", droneSchema);
module.exports = Drone;