# Tour Operator Booking App - Natours

A tour operator booking app with a REST API using MongoDB, Mongoose, Express and Stripe.

[See Demo deployed on Render](https://node-travel-app.onrender.com/)

[See API documentation on Postman](https://documenter.getpostman.com/view/11993746/T17Ke7HH?version=latest)

<p align="center">
  <a href="https://node-travel-app.onrender.com/">
    <img src="screenshot.png" alt="See Demo deployed on Render">
  </a>
</p>

## Key features

- building a REST API with Express, logging requests with Morgan and sending JSend responses.
- using the MVC (Model-View-Controller) architecture with separate routers.
- rendering a server-side website with Pug templates.
- handling log in, sign up and book tour actions with JavaScript and Axios.
- displaying day-by-day itinerary for each tour with Mapbox.
- showing user-friendly alerts with success/error messages.
- updating user settings, profile picture and showing bookings in user dashboard.
- accepting credit card payments with Stripe Checkout and listening to Stripe webhooks.
- sending emails with Pug templates, Nodemailer, Mailtrap and Sendgrid.
- uploading files with multer and processing images with sharp.
- deploying on Render.

## MongoDB and Mongoose

- performing CRUD operations with MongoDB database locally and on MongoDB Atlas.
- writing a script to import data into MongoDB.
- filtering, sorting, aliasing and handling pagination with Mongoose.
- manipulating data with aggregation pipeline and operators.
- leveraging Mongoose pre and post hooks: document middleware, aggregate middleware and query middleware.
- validating data and creating custom validators with Mongoose schemas and validator.
- modeling relationships between data, embedding and referencing.
- creating a factory function for CRUD operations on Tours, Users, Reviews and Bookings.
- using indexes, modeling geospatial data with $geoWithin and $geoNear operators.
- publishing API documentation on Postman.

## Error handling

- handling operational errors and programmer errors with a middleware wrapping all async controllers.
- sending complete error messages in development and user-friendly messages in production.
- having a safety net for unhandled promise rejections, uncaught exceptions and SIGTERM signals with process.on.
- debugging with ndb.

## Authentication and authorization

- hashing passwords with bcryptjs.
- building a complete authentication workflow with JWT: user sign up, log in and reset password via email.
- protecting routes and restricting access according to user role (user, guide, lead guide, admin).

## Security

- implementing security best practices with express-rate-limit, helmet and CORS.
- sending tokens in secure cookies and reading them with cookie-parser.
- sanitizing data with express-mongo-sanitize, xss-clean and hpp.

Based on [Node.js, Express, MongoDB & More: The Complete Bootcamp](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/) by Jonas Schmedtmann (2019).
