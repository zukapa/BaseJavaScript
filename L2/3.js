"use strict"

var x = 10;
var y = -5;
if (x >= 0 && y >= 0)
    console.log(x - y);
else if (x < 0 && y < 0)
    console.log(x * y);
else if (x < 0 && y >= 0 || x >= 0 && y < 0)
    console.log(x + y);