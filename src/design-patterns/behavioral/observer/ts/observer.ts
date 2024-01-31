interface IObserver<T> {
  refresh(value: T): void;
}

interface ISubject<T> {
  observers: IObserver<T>[];
  subscribe(observer: IObserver<T>): void;
  unsubscribe(observer: IObserver<T>): void;
  notify(value: T): void;
}

export class Subject<T> implements ISubject<T> {
  observers: IObserver<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>) {
    this.observers.push(observer);
  }

  unsubscribe(observer: IObserver<T>) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(value: T) {
    this.observers.forEach(obs => {
      obs.refresh(value);
    });
  }
}

export class Observer<T> implements IObserver<T> {
  private fn: (value: T) => void;

  constructor(fn: (value: T) => void) {
    this.fn = fn;
  }

  refresh(value: T) {
    this.fn(value)
  }
}

const subject1 = new Subject<number>();
const subject2 = new Subject<string>();

const o1 = new Observer<number>(value => console.log('=== o1: ', value));
const o2 = new Observer<string>(value => console.log('=== o2: ', value));

subject1.subscribe(o1)
subject1.notify(354)
subject1.notify(30.5)

subject2.subscribe(o2)
subject2.notify('hola')
subject2.notify('mundo')