const express = require("express");
const viewsController = require("../controllers/viewsController");
const { isLoggedIn, protect } = require("../controllers/authController");

const router = express.Router();

router.get("/me", protect, viewsController.getAccount);
router.post("/submit-user-data", protect, viewsController.updateUserData);

router.use(isLoggedIn);

router.get("/", viewsController.getOverview);
router.get("/tour/:slug", viewsController.getTour);
router.get("/login", viewsController.getLoginForm);

module.exports = router;
