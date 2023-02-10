// good
(() => {

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input'|'select'|'textarea'|'radio';

  class HtmlElement {
      constructor(
          public id: string,
          public type: HtmlType,
      ) {}
  }

  class InputAttributes {
      constructor(
          public value: string,
          public placeholder: string,
      ) {}
  }

  class InputEvents {

      setFocus() {};
      getValue() {};
      isActive() {};
      removeValue() {};
  }




  //? Idea para la nueva clase InputElement
  interface InputElementProps {
    name: string;
    placeholder: string;
    id: string;
  }
  class InputElement {
    public html: HtmlElement
    public attributes: InputAttributes
    public events: InputEvents

    constructor({name, placeholder, id}: InputElementProps) {
        this.html = new HtmlElement(id, 'input')
        this.attributes = new InputAttributes(name, placeholder)
        this.events = new InputEvents()
    }
  }

  const nameField = new InputElement({name: 'Fernando', placeholder: 'Enter first name', id: 'txtName'});

  console.log({ nameField });


})();
// bad
(() => {

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input'|'select'|'textarea'|'radio';

  class HtmlElement {
      constructor(
          public id: string,
          public type: HtmlType,
      ) {}
  }

  class InputAttributes extends HtmlElement {
      constructor(
          public value: string,
          public placeholder: string,
          id: string,
      ) {
          super(id, 'input');
      }
  }

  class InputEvents extends InputAttributes {
      constructor( value: string, placeholder: string, id: string ) {
          super( value, placeholder, id );
      }

      setFocus() {};
      getValue() {};
      isActive() {};
      removeValue() {};
  }


  //? Idea para la nueva clase InputElement

  const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');

  console.log({ nameField });


})();