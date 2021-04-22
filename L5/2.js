const basket = [];
const bt = document.querySelector('.basket');
function Product(name, price, total = 1) {
    this.name = name;
    this.price = price;
    this.total = total;
}
basket.push(
    new Product('Milk', 100, 2)
);
basket.push(
    new Product('Bread', 50)
);
basket.push(
    new Product('Pear', 30, 7)
);
function cost(basket) {
    return basket.reduce(function (acc, product) {
        return acc + product.price * product.total;
    }, 0)
}
if (basket.length !== 0) {
    bt.textContent = `In the basket: ${basket.length} goods for a total ${cost(basket)} rubles`;
}
else {
    bt.textContent = 'Basket is empty'
}
