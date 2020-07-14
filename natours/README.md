# Tour Operator Booking App - Natours

A tour operator booking app with a REST API using MongoDB, Mongoose, Express and Stripe.

[See Demo deployed on Heroku](https://node-travel-app.herokuapp.com/)

[See API documentation on Postman](https://documenter.getpostman.com/view/11993746/T17Ke7HH?version=latest)

<p align="center">
  <a href="https://node-travel-app.herokuapp.com/">
    <img src="screenshot.png" alt="See Demo deployed on Heroku">
  </a>
</p>

## Key features

- building a REST API with Express, logging requests with Morgan and sending JSend responses.
- using the MVC (Model-View-Controller) architecture with separate routers.

## MongoDB and Mongoose

- performing CRUD operations with MongoDB database locally and on the Atlas platform.
- writing a script to import data into MongoDB.
- filtering, sorting, aliasing and handling pagination with Mongoose.
- manipulating data with aggregation pipeline and operators.
- leveraging Mongoose pre and post hooks: document middleware, aggregate middleware and query middleware.
- validating data and creating custom validators with Mongoose schemas and validator.

## Error handling

- handling operational errors and programmer errors with a middleware wrapping all async controllers.
- sending complete error messages in development and user-friendly messages in production.
- having a safety net for unhandled promise rejections, uncaught exceptions and SIGTERM signals with process.on.
- debugging with ndb.

## Authentication and authorization

- hashing passwords with bcryptjs.
- building a complete authentication workflow with JWT: user sign up, log in and lost password.
- protecting routes and restricting access according to user role (user, guide, lead guide, admin).
- sending emails with a reset token.

## Security

- implementing security best practices with express-rate-limit and helmet.
- sending tokens in secure cookies.
- sanitizing data with express-mongo-sanitize, xss-clean and hpp.

## Modeling data and advanced features

## Pug templates

...

Based on [Node.js, Express, MongoDB & More: The Complete Bootcamp](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/) by Jonas Schmedtmann (2019).
