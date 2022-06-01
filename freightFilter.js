function scanAndFilter(arr, text) {
	return arr.filter((ele) => {
		return ele !== text;
	});
}

console.log(scanAndFilter(["apples", "ray guns", "oranges", "tacos", "ray guns"], "ray guns"));
