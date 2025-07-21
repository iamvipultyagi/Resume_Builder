
const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();
router.post("/", router);

router.post("/register", authMiddleware, async (req, res) => {
  // Save resume logic here
});

router.get("/", authMiddleware, async (req, res) => {
  // Fetch resume logic here
});

module.exports = router;
