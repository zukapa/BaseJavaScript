"use strict"

var a = 1, b = 1, c, d;
c = ++a; console.log(c);           // 2 - к переменной а прибавляем единицу
d = b++; console.log(d);           // 1 - мы прибавляем единицу, но выводим предыдущее значение
c = (2 + ++a); console.log(c);      // 5 - в первом примере мы прибавили единицу в переменную, к ней прибавляем еще единицу, а потом 2
d = (2 + b++); console.log(d);      // 4 - во втором примере полученно значение 2, прибавляем еще единицу, но выводим предыдущее значение, к ней прибавим 2
console.log(a);                    // 3 - к переменной а прибавили единицу в 1 и 3 примерах
console.log(b);                    // 3 - к переменной прибавили единицу в 2 и 4 примерах