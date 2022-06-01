function scan(arr) {
	let count = 0;
	arr.forEach((element) => {
		if (element == "contraband") {
			count++;
		}
	});
	return count;
}
