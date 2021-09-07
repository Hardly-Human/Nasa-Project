const launches = new Map();

let latestFlightNumber = 100;

const launch = {
	flightNumber: 100,
	mission: "Kepler Exploration X",
	rocket: "Explorer IS1",
	launchDate: new Date("December 27, 2030"),
	target: "Kepler-442 b",
	customers: ["NASA", "ISRO"],
	upcoming: true,
	success: true,
};

launches.set(launch.flightNumber, launch);

function addNewLaunch(launch) {
	latestFlightNumber++;
	launches.set(
		latestFlightNumber,
		Object.assign(launch, {
			flightNumber: latestFlightNumber,
			upcoming: true,
			success: true,
			customers: ["NASA", "ISRO", "SPACEX"],
		})
	);
}

function existsLaunchWithId(launchId) {
	return launches.has(launchId);
}

function abortLaunchById(launchId) {
	const aborted = launches.get(launchId);
	aborted.upcoming = false;
	aborted.success = false;
	return aborted;
}

function getAllLaunches() {
	return Array.from(launches.values());
}

module.exports = {
	getAllLaunches,
	addNewLaunch,
	existsLaunchWithId,
	abortLaunchById,
};
