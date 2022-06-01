function scan(arr) {
	let outArr = [];
	arr.forEach((element, index) => {
		if (element == "contraband") {
			outArr.push(index);
		}
	});
	return outArr;
}
