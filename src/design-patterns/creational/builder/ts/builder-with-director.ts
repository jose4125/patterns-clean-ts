class Person3 {
  private name: string;
  private lastName: string;
  private age: number;
  private country: string;
  private city: string;
  private hobbies: string[];

  constructor(
    name: string,
    lastName: string,
    age: number,
    country: string,
    city: string,
    hobbies: string[],
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }

  getFullName() {
    return this.name + ' ' + this.lastName;
  }
}

interface PersonBuilder {
  name: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];

  setName(name: string): PersonBuilder;
  setLastName(lastName: string): PersonBuilder;
  setAge(age: number): PersonBuilder;
  setCountry(country: string): PersonBuilder;
  setCity(city: string): PersonBuilder;
  addHobby(hobby: string): PersonBuilder;
  build(): Person3;
}

class NormalPersonBuilder implements PersonBuilder {
  name: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];

  constructor() {
    this.reset()
  }

  reset() {
    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
    return this;
  }

  setAge(age: number) {
    this.age = age;
    return this;
  }

  setCountry(country: string) {
    this.country = country;
    return this;
  }

  setCity(city: string) {
    this.city = city;
    return this;
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
    return this;
  }

  build() {
    const person  = new Person3(this.name, this.lastName, this.age, this.country, this.city, this.hobbies)
    this.reset()
    return person;
  }
}

class PersonDirector {
  private personBuilder: PersonBuilder

  constructor(personBuilder: PersonBuilder) {
    this.personBuilder = personBuilder
  }

  setPersonBuilder(personBuilder: PersonBuilder) {
    this.personBuilder = personBuilder;
  }

  createSimplePerson(name:string, lastName: string) {
    this.personBuilder
      .setName(name)
      .setLastName(lastName)
  }
}

const personBuilder = new NormalPersonBuilder()
const jose = personBuilder
  .setName('Jose')
  .setLastName('Doe')
  .addHobby('comer')
  .addHobby('dormir')
  .build()

console.log('=== jose', jose)

const juan = personBuilder
  .setName('Juan')
  .setLastName('Doe')
  .setAge(30)
  .setCountry('colombia')
  .setCity('bogota')
  .addHobby('comer')
  .build()

console.log('=== juan', juan)

const director = new PersonDirector(personBuilder)
director.createSimplePerson('Pepe', 'Doe')
const pepe = personBuilder.build()
console.log('=== pepe', pepe)
