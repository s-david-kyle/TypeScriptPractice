interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected products: T[] = [];

  addProduct(product: T) {
    this.products.push(product);
  }

  getProducts(): T[] {
    return this.products;
  }
}

class CompressibleStore<T> extends Store<T> {
  override addProduct(product: T) {
    console.log("Compressing data...");
    super.addProduct(product);
  }
}

class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this.products.find((product) => product.name === name);
  }
}

let store = new Store<Product>();
store.addProduct({ name: "Apple", price: 5 });
