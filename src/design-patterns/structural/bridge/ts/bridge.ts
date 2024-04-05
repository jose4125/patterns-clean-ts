interface ListImplemetor {
  elements: number[];
  add(number: number): void;
  getElements(): number[];
}

class OrderList implements ListImplemetor {
  elements: number[] = [];

  public add(number: number) {
    this.elements.push(number);
    this.elements.sort(function (a, b) {
      return a - b;
    });
  }

  public getElements() {
    return this.elements;
  }
}

class UniqueList implements ListImplemetor {
  elements: number[] = [];

  public add(number: number) {
    if (!this.elements.includes(number)) {
      this.elements.push(number);
    }
  }

  public getElements() {
    return this.elements;
  }
}

interface DataAbstraction {
  implementor: ListImplemetor;
  add(number: number): void;
  get(): number[];
  operator(fn: (number: number) => number): number[];
}

class DataRefinedAbstraction implements DataAbstraction {
  implementor: ListImplemetor;

  constructor(implementor: ListImplemetor) {
    this.implementor = implementor;
  }

  public add(number: number) {
    this.implementor.add(number);
  }

  public get() {
    return this.implementor.getElements();
  }

  public operator(fn: (number: number) => number) {
    return this.implementor.getElements().map(fn);
  }
}

const uniqueData = new DataRefinedAbstraction(new UniqueList());
const orderData = new DataRefinedAbstraction(new OrderList());

uniqueData.add(5);
uniqueData.add(5);
uniqueData.add(1);
uniqueData.add(10);
uniqueData.add(7);
console.log('=== uniqueData', uniqueData.get());
console.log(
  '=== uniqueData * 2',
  uniqueData.operator(n => n * 2),
);

orderData.add(5);
orderData.add(5);
orderData.add(1);
orderData.add(10);
orderData.add(7);
console.log('=== oerderData', orderData.get());
console.log(
  '=== oerderData + 12',
  orderData.operator(n => n + 12),
);
