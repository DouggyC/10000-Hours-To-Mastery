let number = 1337.8888;

// Round to whole number
parseFloat(number).toFixed(); // str > "1338"
Math.round(number); // int > 1338

// Round to 2 decimal place
parseFloat(number).toFixed(2); // str > "1337.89"
Math.round(number * 100) / 100; // int > 1337.89
