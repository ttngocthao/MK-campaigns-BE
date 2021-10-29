const config = require("./utils/config");
const express = require("express");
require("express-async-errors");
const app = express();

const cors = require("cors");

const middleware = require("./utils/middleware");

const campaignsRouter = require("./controllers/campaigns");

app.use(cors());
// app.use(middleware.requestLogger);
app.use(express.json());

app.use("/api/campaigns", campaignsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
