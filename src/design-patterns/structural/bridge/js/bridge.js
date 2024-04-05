class EncoderTextAbstraction {
  constructor(encoder) {
    this.encoder = encoder;
  }

  encode(text) {
    return this.encoder.encode(text);
  }

  decode(text) {
    return this.encoder.decode(text);
  }
}

class Base64EncoderImplementor {
  encode(text) {
    return window.btoa(unescape(encodeURIComponent(text)));
  }

  decode(text) {
    return decodeURIComponent(escape(window.atob(text)));
  }
}

class HtmlEncoderImplementor {
  encode(text) {
    return text.split('.').reduce((acc, item) => {
      return acc + `<p>${item.trim()}</p>`;
    }, '');
  }

  decode(text) {
    return text.split('</p>').reduce((acc, item) => {
      return item !== '' ? acc + `${item.replace('<p>', '')}. ` : acc + '';
    }, '');
  }
}

const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
console.log('=== encode', encoder1.encode('pato'));
console.log('=== decode', encoder1.decode('cGF0bw=='));

const encoder2 = new EncoderTextAbstraction(new HtmlEncoderImplementor());
console.log('=== encode', encoder2.encode('pato. hola mundo. blas'));
console.log(
  '=== decode',
  encoder2.decode('<p>pato</p><p>hola mundo</p><p>blas</p>'),
);
