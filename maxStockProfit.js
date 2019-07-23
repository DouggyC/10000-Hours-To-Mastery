/**
 * Function that returns the potiential max stock profit from a single trading day
 *
 */

function maxStockProfit(arr) {
  let result = 0;
  result = Math.max(...arr) - Math.min(...arr);

  if (result >= 0) {
    return result;
  } else if (result < 0) {
    return -1;
  }
}

console.log(maxStockProfit([40, 30, 55, 86, 35, 60]));

// for loop if / else statment
function maxStP(arr) {
  let highest = 0;
  let lowest = arr[arr.length - 1];

  for (var i = 0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    } else if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }
  return highest - lowest;
}
console.log(maxStP([40, 30, 55, 86, 35, 60]));

// with sort()
function maxStP(arr) {
  arr.sort((a, b) => a - b);
  let result = arr[arr.length - 1] - arr[0];

  if (result >= 0) {
    return result;
  } else if (result < 0) {
    return -1;
  } else {
  }
}
console.log(maxStP([40, 30, 55, 86, 35, 60]));

// solution, daily trader
function mxStockProfit(pricesArr) {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  let changeBuyPrice = true;

  for (let i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) {
      buyPrice = pricesArr[i];
      console.log(i + " buy: " + buyPrice);
    }

    sellPrice = pricesArr[i + 1];
    console.log(i, pricesArr[i] + " sellPrice: " + sellPrice);

    // buyPrice indice only iterate if sell price is less than buy price
    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      // determine potiential profits at current indices
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) {
        maxProfit = tempProfit;
      }
      changeBuyPrice = false;
    }
  }

  return maxProfit;
}
console.log(mxStockProfit([0, 5, 15, 30, 50, 75]));
