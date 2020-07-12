import axios from "axios";
import { showAlert } from "./alerts";
const stripe = Stripe(
  "pk_test_51H40FeAO9KVJMeZdsZ2srQNiFSCs0LUuvTFnXZiUhM22JFJJ8h54UpMIYsLgT6aGJt4BO9Dev40xTSYK4dnOzzs3001LnI4Aop"
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert("error", err);
  }
};
