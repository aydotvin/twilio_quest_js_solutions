class Ducktypium {
	constructor(a) {
		this.allowedColors = ["red", "blue", "green"];
		this.calibrationSequence = [];

		try {
			this.color = a;
			if (!this.allowedColors.includes(a)) {
				throw new Error("wrong color");
			}
		} catch (err) {
			alert("doesn't execute");
		}

		this.red = {
			blue: "purple",
			yellow: "orange",
		};
		this.yellow = {
			blue: "green",
			red: "orange",
		};
		this.blue = {
			red: "purple",
			yellow: "green",
		};
	}

	refract = (color) => {
		if (color == this.color) {
			return color;
		}
		switch (color) {
			case "red":
				return this.red[this.color];
			case "blue":
				return this.blue[this.color];
			case "yellow":
				return this.yellow[this.color];

			default:
				break;
		}
	};
	calibrate = (arr) => {
		this.calibrationSequence = arr
			.sort((a, b) => {
				return parseFloat(a) < parseFloat(b) ? -1 : 1;
			})
			.map((each) => each * 3);
	};
}

let obj = new Ducktypium("red");
// console.log(obj);

obj.calibrate([9, 8, 7, 1, 2, 3, 5, 1, 213, 7]);
console.log(obj.calibrationSequence);
