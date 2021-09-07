const API_URL = "http://127.0.0.1:8000";

async function httpGetPlanets() {
	const response = await fetch(`${API_URL}/planets`);
	return await response.json();
}

async function httpGetLaunches() {
	const response = await fetch(`${API_URL}/launches`);
	const fetchedLaunches = await response.json();
	return fetchedLaunches.sort((a, b) => {
		return a.flightNumber - b.flightNumber;
	});
}

async function httpSubmitLaunch(launch) {
	try {
		return await fetch(`${API_URL}/launches`, {
			method: "POST",
			body: JSON.stringify(launch),
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		return {
			ok: false,
		};
	}

	// TODO: Once API is ready.
	// Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
	// TODO: Once API is ready.
	// Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
