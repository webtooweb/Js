// Distance conversions
console.log("Distance Conversions");
console.log("-------------------");
var miles = 24;
var kilometers = 40;
var milesToKilometers = miles * 1.609344;
var kilometersToMiles = kilometers / 1.609344;

console.log(miles + " miles are:");
console.log(milesToKilometers + " kilometers");
console.log("----");
console.log(kilometers + " kilometers are:");
console.log(kilometersToMiles + " miles");

console.log("\n");

// Temperature conversions
console.log("Temperature Conversions");
console.log("----------------------");
var celsius = 5;
var fahrenheit = 41;
var celsiusToFahrenheit = (celsius * 9 / 5) + 32;
var fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;

console.log(celsius + " degrees Celsius are:");
console.log(celsiusToFahrenheit + " degrees Fahrenheit");
console.log("----");
console.log(fahrenheit + " degrees Fahrenheit are:");
console.log(fahrenheitToCelsius + " degrees Celsius");

console.log("\n");

// Weigh conversions
console.log("Additional Conversions");
console.log("-----------------------");
var grams = 1000;
var liters = 2;
var gramsToKilograms = grams / 1000;
var litersToGrams = liters * 1000;

console.log(grams + " grams are:");
console.log(gramsToKilograms + " kilograms");
console.log("----");
console.log(liters + " liters are:");
console.log(litersToGrams + " grams");
