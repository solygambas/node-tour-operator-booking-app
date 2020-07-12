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
  getToursWithin,
  getDistances,
  uploadTourImages,
  resizeTourImages,
} = require("../controllers/tourController");
const { protect, restrictTo } = require("../controllers/authController");
const reviewRouter = require("../routes/reviewRoutes");

const router = express.Router();

router.use("/:tourId/reviews", reviewRouter);

router.route("/top-5-cheap").get(aliasTopTours, getAllTours);
router.route("/tour-stats").get(getTourStats);
router
  .route("/monthly-plan/:year")
  .get(protect, restrictTo("admin", "lead-guide", "guide"), getMonthlyPlan);

router
  .route("/tours-within/:distance/center/:latlng/unit/:unit")
  .get(getToursWithin);
// query params: /tours-within?distance=233&center=-40,45&unit=mi
// cleaner way: /tours-within/233/center/-40,45/unit/mi

router.route("/distances/:latlng/unit/:unit").get(getDistances);

router
  .route("/")
  .get(getAllTours)
  .post(protect, restrictTo("admin", "lead-guide"), createTour);

router
  .route("/:id")
  .get(getTour)
  .patch(
    protect,
    restrictTo("admin", "lead-guide"),
    uploadTourImages,
    resizeTourImages,
    updateTour
  )
  .delete(protect, restrictTo("admin", "lead-guide"), deleteTour);

module.exports = router;
