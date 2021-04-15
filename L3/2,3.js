let basket = [10, 1920, 799, 145, 76]

console.log(basket.reduce(function countBasketPrice(acc, el) {
    return acc + el;
}, 0));
