function countMatches(items, ruleKey, ruleValue) {
    var objetosItem = [];
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var itemArr = items_1[_i];
        var item = {
            type: itemArr[0],
            color: itemArr[1],
            name: itemArr[2]
        };
        objetosItem.push(item);
    }
    // console.log(objetosItem);
    var filtrados = objetosItem.filter(function (val) { return val[ruleKey] === ruleValue; });
    console.log(filtrados);
    return objetosItem.reduce(function (acc, item) {
        if (item[ruleKey] === ruleValue) {
            acc++;
        }
        else {
            acc;
        }
        return acc;
    }, 0);
}
;
console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver"));
