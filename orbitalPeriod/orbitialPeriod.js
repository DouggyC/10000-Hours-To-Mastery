/*
Map the Debris
Return a new array that transforms the elements average altitude into their orbital periods (in seconds).
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, 
Gravitational Mass: GM value of earth is 398600.4418 km3s-2.
*/

/**Note: Things to know
 *
 * Newton's Law 2nd Law of Motion,
 * Force = mass * acceleration
 * F = ma
 *
 * Centripetal Acceleration: Acceleration of an object moving on a circular path
 * acceleration = velocity^2 / radius
 * a = v^2 / r
 *
 * We can combine these two equations to calculate the Centripetal Force
 * Force = mass * velocity^2 / radius
 *
 * Universal Gravitational Constant = 6.67 x 10^-11 m^3/kg-s^2 = G ? 6.67*10^-11Nm^2 / kg^2
 * Mass of Earth = 5.97 x 10^24 kg = M1
 * Distance between the two objects from their center of Mass or know as
 * Radius of Earth = 6371km or 6.371 * 10^6 meters = r
 * F = G ( (M1 * m2) / (r^2) )
 *
 * Orbital Velocity, is the speed at which an object orbits around a mass, travelling on a circular path
 *  velocity = Math.sqrt( (Gravitational Constant * Mass of Earth)  / (radius) )
 * v = Math.sqrt( (G * M1) / (r) )
 *
 * Once we have velocity, we can use the velocity equation to calculate Time as:
 * velocity =distance / time
 * v = d / t
 *
 * We can rearrange the equation to solve for Time
 * T = d / v
 *
 * We know the distance is travels is a one circular orbit around Earth, or circumference, d = 2 * Math.PI * radius
 * T = 2 * Math.PI * r / v
 *
 * We can establish the radius in the equation, as the orbital height of the object is the from the center of Earth: radius of Earth + objects altitude
 *
 * Note in the challenge the radius of Earth is given as 6367.4447
 * 6367.4447 + 35873.5553 = 42241km = r
 *
 * T = 2 * Math.PI * 42241 / v
 *
 * Solving for velocity
 * v = Math.sqrt( (G * M1) / (r) )
 * v = Math.sqrt( 398600.4418 / 42241 )
 * v = 3.071862642010611km/s
 *
 * T = 2 * Math.PI * 42241 / 3.071862642010611
 * T = 86399.70646176311 seconds
 *
 * T = Math.round(2 * Math.PI * 42241 / 3.071862642010611)
 * T = 86400 seconds to orbit Earth
 *
 *
 *
  (2 * Math.PI * (sat.avgAlt + earthRadius)) / (Math.sqrt( (GM) / (sat.avgAlt + earthRadius) ))
 */

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  return arr.map(sat => ({
    name: sat.name,
    orbitalPeriod: Math.round(
      (2 * Math.PI * (sat.avgAlt + earthRadius)) /
        Math.sqrt(GM / (sat.avgAlt + earthRadius))
    )
  }));
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
// > [{name: "sputnik", orbitalPeriod: 86400}]

console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 }
  ])
);
// > [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]

/** Solution 2 -
 * T = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + sat.avgAlt, 3) / GM))
 */
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  return arr.map(sat => ({
    name: sat.name,
    orbitalPeriod: Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + sat.avgAlt, 3) / GM)
    )
  }));
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
// > [{name: "sputnik", orbitalPeriod: 86400}]
console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 }
  ])
);
// > [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]

// fcc Basic solution
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  var newArr = [];
  var getOrbPeriod = function(obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

// Code Explanation:
// GM and earthRadius are both given to us.
// To make the code easier to edit and read, each part of the equation is written separately.
// Create newArr to store the orbPeriod‘s.
// a is 2 times pi. The part that is a constant is on the global scope while the rest is part of a function.
// Create a function, gerOrbPeriod() that will do the required work for any amount of objects.
// c is (earthRadius + avgAlt) to the cube.
// b is the square root of c divided by GM.
// Create orbPeriod to store the product of a and b, with the Math.round() function applied to round up to the next whole number.
// Then we delete the key avgAlt, and add the new key and its value.

// fcc intermediate Solution
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  //Looping through each key in arr object
  for (var prop in arr) {
    //Rounding off the orbital period value
    var orbitalPer = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM)
    );
    //deleting the avgAlt property
    delete arr[prop].avgAlt;
    //adding orbitalPeriod property
    arr[prop].orbitalPeriod = orbitalPer;
  }

  return arr;
}
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

// Code Explanation:
// GM and earthRadius are both given to us.
// A for..in loop is used to iterate through each value in given array arr.
// orbitalPer holds the value of orbital period for each iteration calculated using the formula.
// The key avgAlt is deleted, and orbitalPer found is assigned in arr.

// fcc Advanced Solution
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  // Loop through each item in the array arr
  arr.forEach(function(item) {
    // Calculate the Orbital period value
    var tmp = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
    );
    //Delete the avgAlt property
    delete item.avgAlt;
    //Add orbitalPeriod property
    item.orbitalPeriod = tmp;
  });
  return arr;
}
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

// Code Explanation:
// GM and earthRadius are both given to us.
// The forEach() method is used to execute the function once per element (item) in arr.
// tmp holds the value of orbital period for each element calculated using the formula.
// The key avgAlt is deleted, and orbital period (tmp) found is assigned to the key orbitalPeriod.
