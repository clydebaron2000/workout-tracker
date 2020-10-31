const router = require("express").Router();
const db = require("../models");

function addDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
}
router.get("/api/workouts", (req, res) => {
  db.Workout.find({}).sort({ date: -1 }).then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.status(400).json(err);
  });
});
router.put("/api/workouts/:id", (req, res) => {
  let body = req.body;
  db.Workout.create({ exercises: [body] }).then(dbTransaction => {
    res.json(dbTransaction);
  }).catch(err => {
    res.status(400).json(err);
  });
});
router.post("/api/workouts", ({ body }, res) => {
  console.log("create");
  db.Workout.create(body).then(dbTransaction => {
    console.log(dbTransaction);
    res.json(dbTransaction);
  }).catch(err => {
    res.status(400).json(err);
  });
});
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({ date: { $gte: new Date(new Date().setDate(new Date().getDate() - 7)) } }).then(dbWorkout => {
    console.log("returned:", dbWorkout);
    res.json(dbWorkout);
  }).catch(err => {
    res.status(400).json(err);
  });
});
module.exports = router;