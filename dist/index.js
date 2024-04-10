"use strict";
class Store {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getProducts() {
        return this.products;
    }
    find(property, value) {
        return this.products.find((product) => product[property] === value);
    }
}
let store = new Store();
store.addProduct({ name: "Apple", price: 5 });
store.find("name", "Apple");
//# sourceMappingURL=index.js.map