const express = require("express");
const viewsController = require("../controllers/viewsController");
const { isLoggedIn, protect } = require("../controllers/authController");

const router = express.Router();

router.use(viewsController.alerts);

router.get("/me", protect, viewsController.getAccount);
router.get("/my-tours", protect, viewsController.getMyTours);
router.post("/submit-user-data", protect, viewsController.updateUserData);

router.use(isLoggedIn);

router.get("/", viewsController.getOverview);
router.get("/tour/:slug", viewsController.getTour);
router.get("/login", viewsController.getLoginForm);
router.get("/signup", viewsController.getSignupForm);

module.exports = router;
