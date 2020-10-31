const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Enter an exercise type"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter an exercise name"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter an exercise duration"
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distance: {
      type: Number
    }
  }]
});
workoutSchema.virtual("totalDuration").get(() => {
  return this.exercises.reduce((t, e) => { return t + e.duration }, 0)
})
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;