const express = require("express");
const app = express();
const ExpressError = require("./expressError");

//IMPORT HELPER FUNCTIONS:

const { getNums, getMedian, getMean, getMode } = require("./helpers");

//ROUTES:

app.get("/mean", (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query of nums with a comma-separated list of numbers.",
      400
    );
  }

  let numbers = getNums(req.query.nums);

  const response = {
    operation: "mean",
    result: getMean(numbers),
  };

  res.send(response);
});

app.get("/median", (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query of nums with a comma-separated list of numbers.",
      400
    );
  }

  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query of nums with a comma-separated list of numbers.",
      400
    );
  }

  const numbers = getNums(req.query.nums);

  const response = {
    operation: "median",
    result: getMedian(numbers),
  };

  res.send(response);
});

app.get("/mode", (req, res) => {
  let numbers = getNums(req.query.nums);

  const response = {
    operation: "mode",
    result: getMode(numbers),
  };

  res.send(response);
});

app.get("/all", (req, res) => {
  let numbers = getNums(req.query.nums);

  const response = {
    operation: "all",
    mean: getMean(numbers),
    median: getMedian(numbers),
    mode: getMode(numbers),
  };

  res.send(response);
});

app.use((req, res) => {
  res.send("404 error");
});

app.listen(3000, (error) => {
  if (!error) {
    console.log("listening on port 3000");
  } else console.log("Error occurred, server can't start", error);
});
