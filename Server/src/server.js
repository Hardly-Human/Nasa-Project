const http = require("http");
const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.Server(app);

// We wait till data is loaded and
// then start listening for requests...
async function startServer() {
	await loadPlanetsData();
	server.listen(PORT, () => console.log("Server running on port :", PORT));
}

startServer();
