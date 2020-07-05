const express = require("express");

const {
  aliasTopTours,
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourController");

const router = express.Router();

router.route("/top-5-cheap").get(aliasTopTours, getAllTours);

router
  .route("/")
  .get(getAllTours)
  .post(createTour);

router
  .route("/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
