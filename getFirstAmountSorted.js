function getFirstAmountSorted(a, b) {
	let x = a.sort();
	return x.splice(0, b);
}
