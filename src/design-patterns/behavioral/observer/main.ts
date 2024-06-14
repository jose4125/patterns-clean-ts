import './js/observer.js';
import './js/use_case_1.js';
import './ts/observer';
import './ts/use_case_1';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Observer Pattern</h1>
  <span>Revisar la consola de JavaScript</span>
`;
