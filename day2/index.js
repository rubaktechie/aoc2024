const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');

const lines = input.split("\n");

let safe = 0;


const checkIsValid = (values) => {
	let isSafe = true;
	let isIncreasing = false;
	let isDecreasing = false;
	for (let index = 0; index < (values.length - 1); index++) {
		let valueA = parseInt(values[index])
		let valueB = parseInt(values[index + 1])

		let difference = valueA - valueB

		if (index == 0) {
			if (difference > 0) {
				isIncreasing = true;
			} else {
				isDecreasing = true;
			}
		}

		if (difference == 0) {
			isSafe = false;
		}

		if (difference > 3) {
			isSafe = false;
		}

		if (difference < -3) {
			isSafe = false;
		}

		if (difference > 0) {
			if (!isIncreasing) {
				isSafe = false;
			}
		} else {
			if (!isDecreasing) {
				isSafe = false;
			}
		}
	}

	return isSafe;
}


lines.forEach(element => {
	let values = element.split(" ");

	let isSafe = checkIsValid(values);

	if (isSafe) {
		safe++;
	} else {
		let secIsSafe = 0;
		for (let index = 0; index < values.length; index++) {
			let elements = element.split(" ");
			elements.splice(index, 1)
			if (checkIsValid(elements)) {
				secIsSafe++;
			}
		}
		if (secIsSafe) {
			safe++
		}
	}
});

console.log(safe);