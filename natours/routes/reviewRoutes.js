const express = require("express");
const {
  getAllReviews,
  setTourUserIds,
  createReview,
  getReview,
  updateReview,
  deleteReview,
} = require("./../controllers/reviewController");
const { protect, restrictTo } = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(protect);

router
  .route("/")
  .get(getAllReviews)
  .post(restrictTo("user"), setTourUserIds, createReview);

router
  .route("/:id")
  .get(getReview)
  .patch(restrictTo("user", "admin"), updateReview)
  .delete(restrictTo("user", "admin"), deleteReview);

module.exports = router;
