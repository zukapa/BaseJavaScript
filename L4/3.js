function Product(name, price, total = 1, img, desc) {
    this.name = name; // имя товара.
    this.price = price; // цена товара.
    this.total = total; // количество товара.
    this.img = img; // изображение товара.
    this.desc = desc;  // описание товара.
}

function productCard(name, price, img, desc) { // функция для получения информации о товаре, для формирования каталога продукции.
    return name, price, img, desc;
}
