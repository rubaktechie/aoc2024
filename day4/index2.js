const fs = require("fs");

const input = fs.readFileSync("input.txt", 'utf8')

let lines = input.split("\n")
let count = 0;

lines.forEach((element, index) => {

    element.split("").forEach((innerElement, innerIndex) => {
        
        if(innerElement == "A"){

            if(
                (lines[index-1] && lines[index-1][innerIndex-1] && lines[index-1][innerIndex-1] == "S" ) && 
                (lines[index+1] && lines[index+1][innerIndex+1] && lines[index+1][innerIndex+1] == "M" )&& 
                (lines[index-1] && lines[index-1][innerIndex+1] && lines[index-1][innerIndex+1] == "S" )&& 
                (lines[index+1] && lines[index+1][innerIndex-1] && lines[index+1][innerIndex-1] == "M" )
            ){
                count++;
            }

            if(
                (lines[index-1] && lines[index-1][innerIndex-1] && lines[index-1][innerIndex-1] == "S" ) && 
                (lines[index+1] && lines[index+1][innerIndex+1] && lines[index+1][innerIndex+1] == "M" )&& 
                (lines[index-1] && lines[index-1][innerIndex+1] && lines[index-1][innerIndex+1] == "M" )&& 
                (lines[index+1] && lines[index+1][innerIndex-1] && lines[index+1][innerIndex-1] == "S" )
            ){
                count++;
            }

            if(
                (lines[index-1] && lines[index-1][innerIndex-1] && lines[index-1][innerIndex-1] == "M" ) && 
                (lines[index+1] && lines[index+1][innerIndex+1] && lines[index+1][innerIndex+1] == "S" )&& 
                (lines[index-1] && lines[index-1][innerIndex+1] && lines[index-1][innerIndex+1] == "M" )&& 
                (lines[index+1] && lines[index+1][innerIndex-1] && lines[index+1][innerIndex-1] == "S" )
            ){
                count++;
            }

            if(
                (lines[index-1] && lines[index-1][innerIndex-1] && lines[index-1][innerIndex-1] == "M" ) && 
                (lines[index+1] && lines[index+1][innerIndex+1] && lines[index+1][innerIndex+1] == "S" )&& 
                (lines[index-1] && lines[index-1][innerIndex+1] && lines[index-1][innerIndex+1] == "S" )&& 
                (lines[index+1] && lines[index+1][innerIndex-1] && lines[index+1][innerIndex-1] == "M" )
            ){
                count++;
            }
        }
    }); 
});

console.log(count)