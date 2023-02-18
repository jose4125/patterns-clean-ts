export abstract class Vehicle {
  abstract getNumberOfSeats():number
}

export interface IVehicle {
  getNumberOfSeats(): number
}

export class Tesla implements  IVehicle {

  constructor( private numberOfSeats: number ) {}

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Audi implements IVehicle{

  constructor( private numberOfSeats: number ) {}

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Toyota implements IVehicle {

  constructor( private numberOfSeats: number ) {}

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Honda implements IVehicle {

  constructor( private numberOfSeats: number ) {}

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Tesla1 extends Vehicle {

  constructor( private numberOfSeats: number ) {
    super()
  }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Audi1 extends Vehicle {

  constructor( private numberOfSeats: number ) {
    super()
  }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Toyota1 extends Vehicle {

  constructor( private numberOfSeats: number ) {
    super()
  }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}

export class Honda1 extends Vehicle {

  constructor( private numberOfSeats: number ) {
    super()
  }

  getNumberOfSeats() {
      return this.numberOfSeats;
  }
}