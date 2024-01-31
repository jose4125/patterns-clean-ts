import { Subject, Observer } from './observer';

interface IObserver<T> {
  refresh(value: T): void;
}

class Car extends Subject<number> {
  private currentSpeed: number;

  constructor() {
    super();
  }

  getCurrentSpeed() {
    return this.currentSpeed;
  }

  setCurrentSpeed(speed: number) {
    const oldSpeed = this.currentSpeed;
    this.currentSpeed = speed;

    if (oldSpeed !== this.currentSpeed) {
      this.notify(this.currentSpeed);
    }
  }
}

class CurrentSpeedConsoleObserver<T> implements IObserver<T> {
  refresh(value: T) {
    console.log('currentSpeed: ', value);
  }
}

class CurrentSpeedDOMObserver<T> implements IObserver<T> {
  el: HTMLElement | null;
  constructor(selector: string) {
    this.el = document.querySelector(selector);
  }
  refresh(value: T) {
    if (this.el) {
      this.el.textContent = value as string;
    }
  }
}

let currentSpeed = 0;
const car = new Car();
const consoleObserver = new CurrentSpeedConsoleObserver<number>();
const DOMObserver = new CurrentSpeedDOMObserver<number>('.carSpeed');
car.subscribe(consoleObserver);
car.subscribe(DOMObserver);

const interval = setInterval(function () {
  car.setCurrentSpeed((currentSpeed += 10));
}, 1000);


setTimeout(function() {
  clearInterval(interval)
}, 5000)
