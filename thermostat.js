/**
 * Function that simulates a Thermostat
 * Using getters and setters the function allows the abilty to set the fahrenheit conversion scale
 */

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }

    get temperature() {
      return (5 / 9) * (this._fahrenheit - 32);
    }

    set temperature(newTemp) {
      return (this._fahrenheit = (newTemp * 9.0) / 5 + 32);
    }
  }
  /* Alter code above this line */
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C

thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp);
