function calculateMass(arr) {
	return arr.reduce((acc, each) => {
		console.log(acc);
		return each.length + acc;
	}, 0);
}
