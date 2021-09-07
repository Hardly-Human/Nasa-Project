const express = require("express");

const {
	httpGetAllLaunches,
	httpPostNewLaunch,
} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);

launchesRouter.post("/", httpPostNewLaunch);

module.exports = launchesRouter;
