import './js/bridge.js';
import './js/use_case_1.js';
import './ts/bridge';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Bridge Pattern</h1>
  <span>Revisar la consola de JavaScript</span>
`;
