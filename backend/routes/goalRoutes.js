const express = require("express");
const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const router = express.Router();

router.route("/").get(getGoals).post(createGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
