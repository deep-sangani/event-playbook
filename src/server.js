require("dotenv").config();
const express = require("express");
const app = express();
const { sequelize } = require("./db/models");
const routes = require("./routes/routes");
const morgan = require("morgan");
const { ValidationError } = require("joi");

// for formatting the req.body into Json
app.use(express.json());

// use for deep json perser
app.use(express.urlencoded({ extended: true }));

// use for logging the requests
app.use(morgan("dev"));

// all routes
app.use(routes);

// error handler
app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(403).json({
      status: "FAILURE",
      data: null,
      error: err.message,
      msg: "Invalid Request",
    });
  } else {
    res.status(err.status || 500).json({
      status: "ERROR",
      data: null,
      error: err.message,
      msg: err.extraMsg || "Something went wrong",
    });
  }
});

// database connection check
sequelize
  .sync({ alter: false, force: true })
  .then(() => {
    console.log("DataBase Connection has been established successfully.");
    // just for testing purpose
  })
  .catch((error) => {
    console.log(error);
    console.error("unable to connect to the database", error.message);
  });

// server connection
const port = process.env.PORT || 3300;
app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀🚀🚀`);
});
