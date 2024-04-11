interface Product {
  name: string;
  price: number;
}

type ReadOnlyProduct<T> = {
  readonly [K in keyof T]: T[K];
};

class Store<T extends Product> {
  protected products: T[] = [];

  addProduct(product: T) {
    this.products.push(product);
  }

  getProducts(): T[] {
    return this.products;
  }

  find(property: keyof T, value: unknown): T | undefined {
    return this.products.find((product) => product[property] === value);
  }
}

let product: ReadOnlyProduct<Product> = { name: "Apple", price: 5 };
//product.name = "Banana";

// class CompressibleStore<T> extends Store<T> {
//   override addProduct(product: T) {
//     console.log("Compressing data...");
//     super.addProduct(product);
//   }
// }

// class SearchableStore<T extends { name: string }> extends Store<T> {
//    find(name: string): T | undefined {
//     return this.products.find((product) => product.name === name);
//   }
// }

// class ProductStore extends Store<Product> {
//   filterByCategory(category: string): Product[] {
//     return [];
//   }
// }

let store = new Store<Product>();
store.addProduct({ name: "Apple", price: 5 });
store.find("name", "Apple");
