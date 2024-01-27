class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + (amount * this.tax)
  }
}

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount + (amount * this.tax) - (amount * this.discount)
  }
}

class ForeignSaleStrategy {
  getDollarPrice() {
    return 3957
  }

  calculate(amount) {
    return amount / this.getDollarPrice()
  }
}

const iva = 0.19
const discount = 0.3
const regularSale = new RegularSaleStrategy(iva)
const discountSale = new DiscountSaleStrategy(iva, discount)
const dollarSale = new ForeignSaleStrategy()

const sale = new SaleContext(regularSale)

console.log('regular sale', sale.calculate(1000))

sale.setStrategy(discountSale)
console.log('discount strategy', sale.calculate(1000))

sale.setStrategy(dollarSale)
console.log('foreign strategy', sale.calculate(1000))