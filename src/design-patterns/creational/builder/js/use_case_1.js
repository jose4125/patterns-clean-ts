class Form {
  constructor(controls, action) {
    this.controls = controls;
    this.action = action;
  }

  getContent() {
    return `<form method="post" action="${this.action}">
      ${this.controls.reduce((acc, control) => {
        return (
          acc +
          `<div>
          ${this.getLabel(control)}
          ${this.getInput(control)}
        </div>`
        );
      }, '')}
      <button type="submit">Send</button>
    </form><br>`;
  }

  getLabel(control) {
    return `<label>${control.text}</label>`;
  }

  getInput(control) {
    return `<input type="${control.type}" name="${control.name}"/>`;
  }
}

class FormBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.controls = [];
    this.action = '';
  }

  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({
      name,
      text,
      type: 'text',
    });
    return this;
  }

  setEmail(name, text) {
    this.controls.push({
      name,
      text,
      type: 'email',
    });
    return this;
  }

  setCheckbox(name, text) {
    this.controls.push({
      name,
      text,
      type: 'checkbox',
    });
    return this;
  }

  build() {
    const form = new Form(this.controls, this.action);
    this.reset();
    return form;
  }
}

const formBuilder = new FormBuilder();
const formPeople = formBuilder
  .setText('firstName', 'first name')
  .setText('lastName', 'last name')
  .setCheckbox('children', 'have children?')
  .setAction('test')
  .build();

const formMail = formBuilder
  .setText('name', 'Name')
  .setEmail('email', 'Email')
  .build();

const form1 = document.querySelector('.form-builder-1');
form1.innerHTML = formPeople.getContent();

const form2 = document.querySelector('.form-builder-2');
form2.innerHTML = formMail.getContent();
