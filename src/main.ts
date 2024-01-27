import './style.css';
// import './clean-code/05-dry'
// import './clean-code/06-classes-a'
// import './clean-code/06-classes-b'
// import './clean-code/07-classes-dry'
// import './solid/01-single-responsability/01-srp'
// import './solid/01-single-responsability/02-srp'
// import './solid/02-open-close/01-open-close-a-bad'
// import './solid/02-open-close/01-open-close-a-good'
// import './solid/02-open-close/02-open-close-good'
// import './solid/03-liskov-substitution/01-liskov-substitution-a-bad'
// import './solid/03-liskov-substitution/02-liskov-substitution-bad'
// import './solid/03-liskov-substitution/02-liskov-substitution-good'
// import './solid/05-dependency-inversion/01-dependency-inversion-a-bad';
// import './solid/05-dependency-inversion/01-dependency-inversion-a-good';
// import './design-patterns/creational/singleton/js/singleton.js';
// import './design-patterns/creational/singleton/js/use_case_1.js';
// import './design-patterns/creational/singleton/ts/singleton';
import './design-patterns/creational/singleton/ts/use_case_1';
import './design-patterns/behavioral/strategy/js/strategy.js'
import './design-patterns/behavioral/strategy/js/use_case_1.js'
import './design-patterns/behavioral/strategy/ts/strategy'
import './design-patterns/behavioral/strategy/ts/use_case_1'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`;
