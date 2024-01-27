interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.setStrategy(strategy);
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string) {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string) {
    console.log('should authenticaticate through the database')

    if(user === 'admin' && password === 'pass123') {
      return true
    }

    return false
  }
}

class LoginServiceStrategy implements Strategy {
  login(user: string, password: string) {
    console.log('should authenticaticate through a service')

    if(user === 'admin' && password === 'pass123') {
      return true
    }

    return false
  }
}

class LoginGoogleStrategy implements Strategy {
  login(user: string, password: string) {
    console.log('should authenticate through google')

    if(user === 'google' && password === 'auth') {
      return true
    }

    return false
  }
}
const loginDBStrategy = new LoginDBStrategy();
const loginServiceStrategy = new LoginServiceStrategy();
const loginGoogleStrategy = new LoginGoogleStrategy();

const auth = new LoginContext(loginDBStrategy)
console.log('auth: ', auth.login('juan', 'asd'));

auth.setStrategy(loginServiceStrategy)
console.log('auth: ', auth.login('admin', 'pass123'));

auth.setStrategy(loginGoogleStrategy)
console.log('auth: ', auth.login('google', 'auth'));