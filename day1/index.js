const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');


const lines = input.split('\n');

let list1 = [];
let list2 = [];

for (let i = 0; i < lines.length; i++) {
	let values = lines[i].split("   ");

	list1.push(values[0])
	list2.push(values[1])
}

let sortedA = list1.sort();
let sortedB = list2.sort();

let distance = 0;
let similarity = 0

for (let index = 0; index < list1.length; index++) {

	let tempDistance = 0;

	let valueA = parseInt(sortedA[index])
	let valueb = parseInt(sortedB[index])


	if (valueA > valueb) {
		tempDistance = valueA - valueb
	} else {
		tempDistance = valueb - valueA
	}

	distance += tempDistance

	//part Two

	let occurence = sortedB.filter((item) => parseInt(item) == valueA)

	let similarityLocal = occurence.length * valueA;

	similarity += similarityLocal

}

console.log(similarity)


