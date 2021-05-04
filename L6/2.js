const basket = [];
const bt = document.querySelector('.basket');

function Product(name, price, total = 1, img = [`img/${name}1.jpg`, `img/${name}2.jpg`, `img/${name}3.jpg`]) {
    this.name = name;
    this.price = price;
    this.total = total;
    this.img = img;
};

function cost(basket) {
    return basket.reduce(function (acc, product) {
        return acc + product.price * product.total;
    }, 0)
};

function totalBasket(basket) {
    return basket.reduce(function (acc, product) {
        return acc + product.total;
    }, 0)
};

function showBasket() {
    if (basket.length !== 0) {
        bt.textContent = `In the basket: ${totalBasket(basket)} goods for a total ${cost(basket)} rubles`;
    }
    else {
        bt.textContent = 'Basket is empty';
    };
    basket.forEach(function (el) {
        let i = 0;
        e = document.createElement('div');
        bt.append(e);
        e.textContent = `name: ${el.name}, price: ${el.price}, total: ${el.total}`;
        e.insertAdjacentHTML('afterend', `<button data-id=${el.name}>Buy</button>`);
        while (i < 3) {
            j = document.createElement('img');
            e.prepend(j);
            j.classList.add('sp');
            j.setAttribute('src', el.img[i])
            j.setAttribute('data-id', el.img[i])
            i++;
        }
    });
};

function buy() {
    bt.addEventListener('click', function (e) {
        prod = e.target.dataset.id;
        basket.forEach(function (el) {
            if (el.name === prod) {
                el.total++;
            }
        });
        bt.textContent = '';
        showBasket();
    })
};

function modal() {
    bt.addEventListener('click', function (e) {
        prod = e.target.dataset.id;
        basket.forEach(function (el) {
            if (el.img[0] === prod || el.img[1] === prod || el.img[2] === prod) {
                e = document.createElement('img');
                bt.prepend(e);
                e.setAttribute('src', prod);
                e.classList.add('bp')
            }
        });
    });
};

basket.push(
    new Product('Milk', 100, 2)
);
basket.push(
    new Product('Bread', 50)
);
basket.push(
    new Product('Pear', 30, 7)
);
basket.push(
    new Product('Apple', 45, 10)
);
showBasket();
buy();
modal();
