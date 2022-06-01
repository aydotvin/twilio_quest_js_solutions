class Materializer {
	constructor(a) {
		this.target = a;
		this.activated = false;
		this.activate = function () {
			this.activated = true;
		};
		this.materialize = function () {
			if (this.activated) {
				return this.target;
			}
		};
	}
}
