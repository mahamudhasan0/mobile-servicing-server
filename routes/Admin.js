const {
  getAdminSection,
  createAds
} = require("../controllers/Review");

const router = require("express").Router();

router.get("/", getAdminSection);
router.post("/", createAds);

module.exports = router;
