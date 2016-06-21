"use strict"
function makeChange (total, coins) {
  if (total <= 0){
    return [];
  }
  let change = makeChange(total, coins);
  while (total > 0) {
    total -= coins[0];
    if (total >= 0) {
      change.push(coins[0]);
    }
  }
  return change;
}

console.log(makeChange(14, [10,7,1]));
