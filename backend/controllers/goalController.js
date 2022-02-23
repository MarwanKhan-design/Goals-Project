const asyncHandler = require("express-async-handler");
const Goal = require("../models/goal");
const User = require("../models/user");

module.exports.getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.json(goals);
});

module.exports.createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goal);
});

module.exports.updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400).json({ message: "Goal not found" });
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User Not found");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User Not Authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedGoal);
});

module.exports.deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    return res.status(400).json({ message: "Goal not found" });
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User Not found");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User Not Authorized");
  }

  const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
  res.json({ id: req.params.id });
});
