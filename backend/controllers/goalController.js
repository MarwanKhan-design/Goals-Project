const asyncHandler = require("express-async-handler");

module.exports.getGoals = asyncHandler(async (req, res) => {
  res.json({ message: "Get Goals" });
});

module.exports.createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Add a text field");
  }
  console.log(req.body.text);
  res.json({ message: "Create a Goal" });
});

module.exports.updateGoal = asyncHandler(async (req, res) => {
  res.json({ message: `Update Goal ${req.params.id}` });
});

module.exports.deleteGoal = asyncHandler(async (req, res) => {
  res.json({ message: `Delete Goal ${req.params.id}` });
});
