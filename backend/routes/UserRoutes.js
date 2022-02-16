const express = require("express");
const {
  getUsers,
  registerUser,
  updateUser,
  deleteUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getUsers).post(registerUser);
router.route("/:id").put(updateUser).delete(deleteUser);

router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
