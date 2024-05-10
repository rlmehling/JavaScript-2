/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Rebecca Mehling
      Date:   03/14/2023

      Filename: project02-01.js
 */
// convert farenheit to celsius 
      function farenheitToCelsius(degree) {
      let farenheitToCelsius = (degree - 32) /1.8;
      return farenheitToCelsius; 
}

// convert celsius to ferneheit
function celsiusToFerenheit(degree) {
      let celsiusToFerenheit = (degree * 1.8 + 32);
      return celsiusToFerenheit;
}

var cValue = document.getElementById("cValue"); // value of celsius 
cValue.addEventListener("change", function () {
      var cDegree = cValue.value; // value of celsius in degrees
      fValue.value = celsiusToFerenheit(cDegree); // find degrees in celsius when given value of ferenheit
});

var fValue = document.getElementById("fValue"); // value of ferenheit
fValue.addEventListener("change", function() {
      var fDegree = fValue.value; // value of ferenheit in degrees
      cValue.value = farenheitToCelsius(fDegree); // find degrees in ferenheit when given value of celsius
}); 