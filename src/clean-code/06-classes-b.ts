// good
(() => {

  // No aplicando el principio de responsabilidad única
  // priorizar la composicion frente a la herencia


  type Gender = 'M'|'F';

  interface PersonProps {
      birthdate : Date;
      gender    : Gender;
      name      : string;
  }

  class Person {
      public birthdate: Date;
      public gender   : Gender;
      public name     : string;

      constructor({ name, gender, birthdate }: PersonProps ){
          this.name      = name;
          this.gender    = gender;
          this.birthdate = birthdate;
      }
  }


  interface UserProps {
      email     : string;
      role      : string;
  }

  class User {

      public email: string;
      public role : string;
      public lastAccess: Date;

      constructor({
          email,
          role,
      }: UserProps ) {
          this.lastAccess = new Date();
          this.email = email;
          this.role  = role;
      }

      checkCredentials() {
          return true;
      }
  }


  interface SettingsProps {
      lastOpenFolder   : string;
      workingDirectory : string;
  }

  class Settings {

      public workingDirectory: string;
      public lastOpenFolder  : string;

      constructor({
          workingDirectory,
          lastOpenFolder,
      }: SettingsProps ) {
          this.workingDirectory = workingDirectory;
          this.lastOpenFolder   = lastOpenFolder;
      }
  }

  // interface UserSettingsProps {
  //     workingDirectory: string,
  //     lastOpenFolder: string,
  //     email: string,
  //     role: string,
  //     name: string,
  //     gender: Gender,
  //     birthdate: Date
  // }

  interface UserSettingsProps extends PersonProps, UserProps, SettingsProps {}

  class UserSettings {
    public person: Person
    public user: User
    public settings: Settings

    constructor({birthdate, email, gender, lastOpenFolder, name, role, workingDirectory}: UserSettingsProps) {
      this.person = new Person({name, gender, birthdate})
      this.user = new User({email, role})
      this.settings = new Settings({lastOpenFolder, workingDirectory})
    }
  }


  const userSettings = new UserSettings({
      birthdate: new Date('1985-10-21'),
      email: 'fernando@google.com',
      gender: 'M',
      lastOpenFolder: '/home',
      name: 'Fernando',
      role: 'Admin',
      workingDirectory: '/usr/home',
  });

  console.log({ userSettings });


})();
// bad
(() => {

  // No aplicando el principio de responsabilidad única

  type Gender = 'M'|'F';

  interface PersonProps {
      birthdate : Date;
      gender    : Gender;
      name      : string;
  }

  class Person {
      public birthdate: Date;
      public gender   : Gender;
      public name     : string;

      constructor({ name, gender, birthdate }: PersonProps ){
          this.name      = name;
          this.gender    = gender;
          this.birthdate = birthdate;
      }
  }


  interface UserProps {
      birthdate : Date;
      email     : string;
      gender    : Gender;
      name      : string;
      role      : string;
  }

  class User extends Person {

      public email: string;
      public role : string;
      public lastAccess: Date;

      constructor({
          birthdate,
          email,
          gender,
          name,
          role,
      }: UserProps ) {
          super({ name, gender, birthdate });
          this.lastAccess = new Date();
          this.email = email;
          this.role  = role;
      }

      checkCredentials() {
          return true;
      }
  }


  interface UserSettingsProps {
      birthdate        : Date;
      email            : string;
      gender           : Gender;
      lastOpenFolder   : string;
      name             : string;
      role             : string;
      workingDirectory : string;
  }

  class UserSettings extends User {

      public workingDirectory: string;
      public lastOpenFolder  : string;

      constructor({
          workingDirectory,
          lastOpenFolder,
          email,
          role,
          name,
          gender,
          birthdate,
      }: UserSettingsProps ) {
          super({ email, role, name, gender, birthdate });
          this.workingDirectory = workingDirectory;
          this.lastOpenFolder   = lastOpenFolder;
      }
  }


  const userSettings = new UserSettings({
      birthdate: new Date('1985-10-21'),
      email: 'fernando@google.com',
      gender: 'M',
      lastOpenFolder: '/home',
      name: 'Fernando',
      role: 'Admin',
      workingDirectory: '/usr/home',
  });

  console.log({ userSettings });


})();