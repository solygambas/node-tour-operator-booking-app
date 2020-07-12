const express = require("express");
const viewsController = require("../controllers/viewsController");
const { isLoggedIn, protect } = require("../controllers/authController");
const { createBookingCheckout } = require("../controllers/bookingController");

const router = express.Router();

router.get("/me", protect, viewsController.getAccount);
router.get(
  "/my-tours",
  protect,
  createBookingCheckout,
  viewsController.getMyTours
);
router.post("/submit-user-data", protect, viewsController.updateUserData);

router.use(isLoggedIn);

router.get("/", viewsController.getOverview);
router.get("/tour/:slug", viewsController.getTour);
router.get("/login", viewsController.getLoginForm);

module.exports = router;
