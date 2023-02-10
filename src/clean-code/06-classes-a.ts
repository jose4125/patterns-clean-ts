(() => {

  // no aplicando DRY
  type Gender = 'M' | 'F'

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ){}
  }

  const newPerson = new Person('fernando', 'M', new Date('1985-10-21'))
  console.log('new person', newPerson)

  class User extends Person {
    public lastAcces: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ){
      super(name, gender, birthdate)
      this.lastAcces = new Date()
    }
    checkCredentials() {
      return true
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ){
      super(email, role, name, gender, birthdate)
    }
  }

  const userSettings = new UserSettings('/usr/home', '/home', 'fernando@gmail.com', 'administrator', 'fernando', 'M', new Date('1985-10-21'))
  console.log('user settings', userSettings)
})()