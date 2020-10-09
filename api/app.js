const express = require("express");
const cors = require("cors");

const indexRouter = require("./routes/index");

const app = express();

/** Setting */
app.use(cors());
// set bodyParser for parse request body in express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connect routes
app.use("/", indexRouter);


// Error handler
app.use(function onError(err, req, res, next) {
    // eslint-disable-line no-unused-vars
    const error = {
      project: config.project,
      version: config.version,
      host: req.headers.host,
      "user-agent": req.headers["user-agent"],
      url: req.url,
      status: err.status || 500,
      method: req.method,
      message: err.message || err.text || "There was an error on API server",
      env: process.env.NODE_ENV
    };
  
    res.status(err.status || 500).json(error);
  });

module.exports = app;