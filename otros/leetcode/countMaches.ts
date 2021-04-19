interface itemInterface {
    type: string;
    color: string;
    name: string;
}

function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  const objetosItem:itemInterface[] = [];
  for (let itemArr of items){
    const item: itemInterface = {
      type: itemArr[0],
      color: itemArr[1],
      name : itemArr[2],
    }
    objetosItem.push(item);
  } 
  // console.log(objetosItem);
  
  const filtrados = objetosItem.filter((val: itemInterface) => val[ruleKey] === ruleValue);
  console.log(filtrados);
  return objetosItem.reduce((acc,item: itemInterface)=> {
    if(item[ruleKey]===ruleValue){
      acc++;
    } else {
      acc;
    }
    return acc;
  },0);
    
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver"));
