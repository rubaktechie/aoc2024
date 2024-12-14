const fs = require("fs");

const rulesInput = fs.readFileSync("rules.txt", 'utf8')

let rules = [];
let ruleLines = rulesInput.split("\n");
ruleLines.forEach(rulesLine => {
    rules.push(rulesLine.split("|"))
});

const orderInput = fs.readFileSync("order.txt", 'utf8')

let order = []
let orderLines = orderInput.split("\n");
orderLines.forEach(orderLine =>{
    order.push(orderLine.split(","))
})

const getBeforeItems = (item) =>{
    return rules.filter((value) => value[1] == item).map((value)=> value[0])
}

const getAfterItems = (item) =>{
    return rules.filter((value) => value[0] == item).map((value)=> value[1])
}

let finalValue = 0;
let failedItems = [];

order.forEach(element =>{
    let flag = true;
    let isPushed = false;
    for (let index = 0; index < element.length; index++) {
        let beforeItems = getBeforeItems(element[index])
        let afterItems = getAfterItems(element[index])

        for (let innerIndex = 0; innerIndex < beforeItems.length; innerIndex++) {
            let itemIndex = element.indexOf(beforeItems[innerIndex])
            if(itemIndex > -1 && itemIndex > index){
                flag = false;
                if(!isPushed){
                    failedItems.push(element)
                    isPushed = true;
                }
            }
        }

        for (let innerIndex = 0; innerIndex < afterItems.length; innerIndex++) {
            let itemIndex = element.indexOf(afterItems[innerIndex])
            if(itemIndex > -1 && itemIndex < index){
                flag = false;
                if(!isPushed){
                    failedItems.push(element)
                    isPushed = true;
                }
            }
        }
    }
    if(flag){
        finalValue += parseInt(element[Math.floor(element.length/2)]);
    }
})

console.log(finalValue);

let correctedValue = 0;

failedItems.forEach(element => {
    element.sort((a,b) => {
        let beforeItems = getBeforeItems(a)
        if(beforeItems.includes(b)){
            return 1
        }

        let afterItems = getAfterItems(a)
        if(afterItems.includes(b)){
            return -1
        }
        return 0
    })

    correctedValue += parseInt(element[Math.floor(element.length/2)]);

});

console.log(correctedValue)


