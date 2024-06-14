import './js/singleton.js';
import './js/use_case_1.js';
import './ts/singleton';
import './ts/use_case_1';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Singleton Pattern</h1>
  <span>Revisar la consola de JavaScript</span>
`;
