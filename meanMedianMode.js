function meanMedianMode(arr) {
  return {
    mean: mean(arr),
    median: median(arr),
    mode: mode(arr)
  };
}


function mean(arr) {
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total / arr.length;
}
mean([1,2,3,4,6,7,8,9,10]); // 5.5




median = (arr) => arr[Math.floor(arr.length / 2 -1)];
median([1,2,3,4,5,6,7,8,9,10,11]); // 5

function sortGetMedian(arr) {
  arr.sort(function(a, b) {
    return a - b
  });

  if (arr.length % 2 !== 0) {
    median = arr[Math.floor(arr.length / 2)];
  } else {
    var mid1 = arr[(arr.length / 2) - 1];
    var mid2 = arr[(arr.length / 2)];
    median = (mid1 + mid2) / 2;
  }
}



function mode(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  console.log(arr[0], arr[arr.length -1]);
}
mode([8,3,2,1,5,10,9,7,6,4]);
