"use strict"

var a = 2;
var x = 1 + (a *= 2); // х=5, оператор *= это сокращенный оператор, полностью a=a*2
console.log(x)