interface IProduct {
  name: string
  price: number
  discount?: number
}

interface IProductStorage {
  store(product: IProduct): void
  length: number
}

interface IProductLS {
  save(storage: IProductStorage): number
}


class ProductsStorage2 implements IProductStorage {
  private products: IProduct[]

  constructor() {
    this.products = []
  }

  get length() {
    return this.products.length
  }

  store(product: IProduct) {
    this.products.push(product)
  }
}


class ProductLS2 implements IProductLS {
  constructor(public name: string, public price: number) {}

  save(storage: IProductStorage) {
    storage.store({name: this.name, price: this.price})
    return storage.length
  }
}

// extends solution
class DiscountProduct2 extends ProductLS2 {
  constructor(public name: string, public price: number, private discount: number) {
    super(name, price)
  }

  save(storage: IProductStorage) {
    let discounted = {name: this.name, price: this.price - (this.price * this.discount)}
    storage.store(discounted)
    return storage.length
  }
}

// implements solution
class DiscountProduct3 implements IProductLS {
  constructor(public name: string, public price: number, private discount: number) {}

  save(storage: IProductStorage) {
    let discounted = {name: this.name, price: this.price - (this.price * this.discount)}
    storage.store(discounted)
    return storage.length
  }
}

let products2 = [
  {name: 'Product A', price: 28.90},
  {name: 'Product B', price: 34.40},
  {name: 'Product C', price: 149.90, discount: 0.2}
]

const insertAll2 = (products: IProduct[]) => {
    let storage = new ProductsStorage2()
  products.forEach(product => {
    let productInstance
    if(product.discount) {
      productInstance = new DiscountProduct2(product.name, product.price, product.discount)
    } else {
      productInstance = new ProductLS2(product.name, product.price)
    }
    let count = productInstance.save(storage)
    console.log(`Products inserted. ${count} products in total`)
  })
}

insertAll2(products2)