class ProductsStorage {
  private products: []
  constructor() {
    this.products = []
  }

  get length() {
    return this.products.length
  }

  store(product) {
    this.products.push(product)
  }
}

class ProductLS {
  constructor(private name: string, private price: number) {}

  save(storage) {
    storage.store({name: this.name, price: this.price})
    return storage.length
  }
}

class DiscountProduct extends ProductLS {
  constructor(private name: string, private price: number, private discount: number) {
    super(name, price)
  }

  save(storage) {
    let discounted = {name: this.name, price: this.price - (this.price * this.discount)}
    storage.store(discounted)
    return discounted // Violets LSP because is not returning the length is returning an object. it extends from ProductLS and the save methond on it returns the length
  }
}


let products = [
  {name: 'Product A', price: 28.90},
  {name: 'Product B', price: 34.40},
  {name: 'Product C', price: 149.90, discount: 0.2}
]

const insertAll = (products) => {
    let storage = new ProductsStorage()
  products.forEach(product => {
    let productInstance
    if(product.discount) {
      productInstance = new DiscountProduct(product.name, product.price, product.discount)
    } else {
      productInstance = new ProductLS(product.name, product.price)
    }
    let count = productInstance.save(storage)
    console.log(`Products inserted. ${count} products in total`)
  })
}

insertAll(products)