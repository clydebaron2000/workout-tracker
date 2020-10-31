const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const daySchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: Schema.Types.ObjectId,
    ref: "Workout"
  }]
});
const User = mongoose.model("Day", daySchema);
module.exports = User;