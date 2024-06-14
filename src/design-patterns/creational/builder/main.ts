import './js/builder.js';
import './js/builder-with-director.js';
import './js/use_case_1.js';
import './ts/builder-with-director';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Builder Pattern</h1>
  <span>Revisar la consola de JavaScript</span>
`;
