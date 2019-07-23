function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

precisionRound(99.925, 0); // 100
precisionRound(99.925, 1); // 99.9
precisionRound(99.925, 2); // 99.93
precisionRound(99.925, 3); // 99.925
precisionRound(99.925, -1); // 100


Math.round(num * 100) / 100
