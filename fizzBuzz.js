let n = Number(process.argv[2]);

if (n % 5 == 0 && n % 3 == 0) {
	console.log("JavaScript");
} else if (n % 5 == 0) {
	console.log("Script");
} else if (n % 3 == 0) {
	console.log("Java");
} else if (n % 5 != 0 || n % 3 != 0) {
	console.log(n);
}
