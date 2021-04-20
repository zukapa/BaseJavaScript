console.log(null > 0); //false потому, что null при сравнении с числом 0 было преобразовано в число 0.
console.log(null >= 0); //true потому, что результат сравнения null < 0 - false.
console.log(null < 0); //false потому, что null при сравнении с числом 0 было преобразовано в число 0.
console.log(null <= 0); //true потому, что результат сравнения null > 0 - false.
console.log(null == 0); //false потому, что в соответствии со стандартом ECMA-262 - абстрактный алгоритм сравнения равенств в данном случае вернет значение по умолчанию (false).
console.log(null != 0); //true потому, что в соответствии со стандартом ECMA-262 - абстрактный алгоритм сравнения равенств в данном случае вернет значение по умолчанию (true).
console.log(null === 0); //false потому, что типы различаются.
console.log(null !== 0); //true потому, что типы различаются.