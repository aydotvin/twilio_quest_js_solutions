let lifeStatus = process.argv[2].toLowerCase();
let drynessLevel = process.argv[3].toLowerCase();

if (lifeStatus == 0 && drynessLevel > 10) {
	console.log("WATER");
}
