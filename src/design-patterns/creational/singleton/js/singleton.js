class Singleton {
  constructor() {
    this.random = Math.random();

    if (Singleton.instance) {
      console.log('ya existe');
      return Singleton.instance;
    }

    console.log('no existe');
    Singleton.instance = this;
  }

  static getInstance() {
    return Singleton.instance
  }
}

const singleton = new Singleton();
console.log(singleton.random)
const singleton2 = new Singleton();
console.log(singleton2.random)
const singleton3 = Singleton.getInstance();
console.log(singleton3.random)
