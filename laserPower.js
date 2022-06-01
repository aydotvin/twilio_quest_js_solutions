function calculatePower(arr) {
	return arr
		.map((each) => each * 2)
		.reduce((acc, each) => {
			return acc + each;
		}, 0);
}
