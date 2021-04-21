const {
  createAdmins,
  getAdmin,
} = require("../controllers/Review");
const router = require("express").Router();
router.get("/", getAdmin);
router.post("/", createAdmins);
module.exports = router;