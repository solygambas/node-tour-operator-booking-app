const express = require("express");

const {
  getAllTours,
  getTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router.route("/top-5-cheap").get(aliasTopTours, getAllTours);
router.route("/tour-stats").get(getTourStats);
router.route("/monthly-plan/:year").get(getMonthlyPlan);

router
  .route("/")
  .get(protect, getAllTours)
  .post(createTour);

router
  .route("/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
