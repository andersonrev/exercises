
var count = 0;
function cc(card) {
    // Only change code below this line
    var regex = /[JQKA]/;
    if (card > 1 && card < 7) {
      count++;
    } else if (card === 10 || String(card).match(regex)) {
       console.log(String(card).match(regex));
      count--;
    }
  
    if (count > 0) return count + " Bet";
    return count + " Hold";
  
    // Only change code above this line
  }

  console.log(cc("A"));