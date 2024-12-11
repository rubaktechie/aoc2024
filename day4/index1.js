const fs = require("fs");

const input = fs.readFileSync("input.txt", 'utf8')

let lines = input.split("\n")
let count = 0;

const isMatched = (string) =>{
    let straightLen = (string.match(/XMAS/g) || []).length
    let reverseLen =(string.match(/SAMX/g)|| []).length
    count += straightLen;
    count += reverseLen;
}

let diagonalUpper = []
lines.forEach((element, outerIndex) => {
    for (let index = 0, index1 = outerIndex; index < (element.length - outerIndex); index++, index1++) {
        if(!diagonalUpper[outerIndex]){
            diagonalUpper[outerIndex] = lines[index][index1]
        }else{
            diagonalUpper[outerIndex] += lines[index][index1]
        }
    }
})



let diagonalLower = [];

lines.forEach((element, outerIndex) => {
    if(outerIndex > 0){
        for (let index = 0, index1 = outerIndex; index < (element.length - outerIndex); index++, index1++) {
            if(!diagonalLower[outerIndex]){
                diagonalLower[outerIndex] = lines[index1][index]
            }else{
                diagonalLower[outerIndex] += lines[index1][index]
            }
        }
    }
});

let verticalLines = []
lines.forEach((element, outerIndex) => {
    for (let index = 0; index < element.length; index++) {
        if(!verticalLines[index]){
            verticalLines[index] = element[index]
        }else{
            verticalLines[index] += element[index]
        }
    }
})


let verDiagonalUpper = []
lines.forEach((element, outerIndex) => {
    for (let index = ((element.length-1) -outerIndex), index1 = 0; index >= 0; index--, index1++) {
        // console.log(index, index1)
        if(!verDiagonalUpper[outerIndex]){
            verDiagonalUpper[outerIndex] = lines[index][index1]
        }else{
            verDiagonalUpper[outerIndex] += lines[index][index1]
        }
    }
})


let verDdiagonalLower = [];
lines.forEach((element, outerIndex) => {
    if(outerIndex > 0){
        for (let index = ((element.length-1)), index1 = outerIndex; index >= outerIndex; index--, index1++) {
            if(!verDdiagonalLower[outerIndex]){
                verDdiagonalLower[outerIndex] = lines[index][index1]
            }else{
                verDdiagonalLower[outerIndex] += lines[index][index1]
            }
        }
    }
})


lines.forEach(element => {
    isMatched(element)
});
verticalLines.forEach(element => {
    isMatched(element)
});

diagonalLower.forEach(element => {
    isMatched(element)
});

diagonalUpper.forEach(element => {
    isMatched(element)
});

verDdiagonalLower.forEach(element => {
    isMatched(element)
});

verDiagonalUpper.forEach(element => {
    isMatched(element)
});

console.log(count)
