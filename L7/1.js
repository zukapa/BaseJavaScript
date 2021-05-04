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
        bt.insertAdjacentHTML('beforeend', `<button data-id=edit>Edit</button>`)
    }
    else {
        bt.textContent = 'Basket is empty';
    };
    basket.forEach(function (el) {
        let i = 0;
        e = document.createElement('div');
        bt.append(e);
        e.textContent = `name: ${el.name}, price: ${el.price}, total: ${el.total}`;
        e.insertAdjacentHTML('afterend', `<button data-id=${el.name}b class=buy>Buy</button>`);
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
        basket.forEach(function (el) {
            if (e.target.dataset.id === `${el.name}b`) {
                el.total++;
                bt.textContent = '';
                showBasket();
            };
        });
    });
};

function bigPic() {
    bt.addEventListener('click', function (e) {
        prod = e.target.dataset.id;
        basket.forEach(function (el) {
            if (el.img[0] === prod || el.img[1] === prod || el.img[2] === prod) {
                bt.textContent = '';
                showBasket();
                e = document.createElement('img');
                bt.prepend(e);
                e.setAttribute('src', prod);
                e.classList.add('bp')
            }
        });
    });
};

function showEdit() {
    showBasket();
    ed = document.createElement('div');
    bt.prepend(ed);
    ed.classList.add('editbas');
    basket.forEach(function (el, i) {
        pp = document.createElement('div');
        ed.append(pp);
        pp.textContent = `name: ${el.name}, price: ${el.price}, total: ${el.total}`;
        pp.insertAdjacentHTML('afterend', `<button data-id=${el.name}${i}+>+</button><button data-id=${el.name}${i}->-</button><button data-id=${el.name}${i}d>delete</button>`);
    });
    if (basket.length != 0 && document.querySelector('.next') === null) {
        ed.insertAdjacentHTML('afterend', `<button data-id=next class=next>next</button>`);
    }

};

function edit() {
    bt.addEventListener('click', function (e) {
        if (e.target.dataset.id === 'edit') {
            bt.textContent = '';
            showBasket();
            ed = document.createElement('div');
            bt.prepend(ed);
            ed.classList.add('editbas');
            basket.forEach(function (el, i) {
                pp = document.createElement('div');
                ed.append(pp);
                pp.textContent = `name: ${el.name}, price: ${el.price}, total: ${el.total}`;
                pp.insertAdjacentHTML('afterend', `<button data-id=${el.name}${i}+>+</button><button data-id=${el.name}${i}->-</button><button data-id=${el.name}${i}d>delete</button>`);
            });
        };
        if (basket.length != 0 && document.querySelector('.next') === null && document.querySelector('.bp') === null && e.target.classList.value != 'buy' && e.target.localName != 'div') {
            ed.insertAdjacentHTML('afterend', `<button data-id=next class=next>next</button>`);
        };
    });
};

function editAdd() {
    bt.addEventListener('click', function (e) {
        basket.forEach(function (el, i) {
            if (e.target.dataset.id === `${el.name}${i}+`) {
                el.total++;
                bt.textContent = '';
                showEdit();
            };
        });
    });
};

function editRemove() {
    bt.addEventListener('click', function (e) {
        basket.forEach(function (el, i) {
            if (e.target.dataset.id === `${el.name}${i}-` && el.total > 0) {
                el.total--;
                bt.textContent = '';
                showEdit();
            };
        });
    });
};

function editDelete() {
    bt.addEventListener('click', function (e) {
        basket.forEach(function (el, i) {
            if (e.target.dataset.id === `${el.name}${i}d`) {
                basket.splice(i, 1);
                bt.textContent = '';
                showEdit();
            };
        });
    });
};

function Continue() {
    bt.addEventListener('click', function (e) {
        if (e.target.dataset.id === 'next') {
            bt.textContent = '';
            showBasket();
            ed = document.createElement('div');
            bt.prepend(ed);
            ed.classList.add('editbas');
            ed.insertAdjacentHTML('afterbegin', `<textarea rows=8>Delivery address</textarea>`);
            if (basket.length != 0 && document.querySelector('.next') === null) {
                ed.insertAdjacentHTML('afterend', `<button data-id=nextcom class=next>next</button>`);
            }
        }
        else if (e.target.dataset.id === 'nextcom') {
            bt.textContent = '';
            showBasket();
            ed = document.createElement('div');
            bt.prepend(ed);
            ed.classList.add('editbas');
            ed.insertAdjacentHTML('afterbegin', `<textarea rows=8>Comment</textarea>`);
            if (basket.length != 0 && document.querySelector('.nextcom') === null) {
                ed.insertAdjacentHTML('afterend', `<button data-id=end class=next>complete the order</button>`);
            }
        }
        else if (e.target.dataset.id === 'end') {
            bt.textContent = 'Hurray! The order is created!';
        }
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
bigPic();
edit();
editAdd();
editRemove();
editDelete();
Continue();
