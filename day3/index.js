const { fail } = require("assert");
const fs = require("fs");

const input = fs.readFileSync("input.txt", 'utf8')

let finalValue= 0;
let doSplitted = input.split("do(")

const calculateMultiply = (input) =>{
    let splitted = input.split("mul(")
    const regex = new RegExp(/^\d+,\d+$/);

    splitted.forEach(element => {
        let innerSplitted = element.split(")")
        innerSplitted.forEach(innerElement => {
            if(regex.test(innerElement)){
                let mulValues = innerElement.split(",")
                let multipleLocal = parseInt(mulValues[0]) * parseInt(mulValues[1])
                finalValue += multipleLocal;
            }
        });
    });
}

doSplitted.forEach((element, index) => {
    // if(index != 0){
        let outerSplitted = element.split("don't")

        calculateMultiply(outerSplitted[0])
    // }
});

console.log(finalValue)