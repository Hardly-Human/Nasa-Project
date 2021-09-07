const parse = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

const isHabitablePlanet = (planet) => {
	return (
		planet["koi_disposition"] === "CONFIRMED" &&
		planet["koi_insol"] > 0.36 &&
		planet["koi_insol"] < 1.11 &&
		planet["koi_prad"] < 1.6
	);
};

function loadPlanetsData() {
	return new Promise((resolve, reject) => {
		fs.createReadStream("./data/kepler_data.csv")
			.pipe(parse({ comment: "#", columns: true }))
			.on("data", (data) => {
				if (isHabitablePlanet(data)) {
					habitablePlanets.push(data);
				}
			})
			.on("error", (error) => {
				console.log(error);
				reject(error);
			})
			.on("end", () => {
				console.log(
					`${habitablePlanets.length} habitable planets found!`
				);

				resolve(habitablePlanets);
			});
	});
}

module.exports = { loadPlanetsData, planets: habitablePlanets };
