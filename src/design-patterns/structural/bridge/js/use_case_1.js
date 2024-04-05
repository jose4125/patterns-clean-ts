class Editor {
  constructor(painter) {
    this.painter = painter;
  }

  print(width, height, color) {
    this.painter.setWidth(width);
    this.painter.setHeight(height);
    this.painter.setColor(color);
    this.painter.print();
  }
}

class EditorWithClean extends Editor {
  constructor(painter) {
    super(painter);
  }

  clean() {
    this.painter.setWidth(0);
    this.painter.setHeight(0);
    this.painter.print();
  }
}

class HtmlPainter {
  constructor(elementContainer) {
    this.elementContainer = elementContainer;
    this.width = '1px';
    this.height = '1px';
    this.color = '#000000';
  }

  setWidth(width) {
    this.width = `${width}px`;
  }

  setHeight(height) {
    this.height = `${height}px`;
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.elementContainer.innerHTML = `<div style="width: ${this.width}; height: ${this.height}; background-color: ${this.color}"></div>`;
  }
}

class CanvasPainter {
  constructor(elementCanvas) {
    this.elementCanvas = elementCanvas;
    this.ctx = elementCanvas.getContext('2d');
    this.width = 1;
    this.height = 1;
    this.color = '#000000';
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.ctx.clearRect(
      0,
      0,
      this.elementCanvas.width,
      this.elementCanvas.height,
    );
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
}

const contentBridge = document.querySelector('.content-bridge');
const canvasBridge = document.querySelector('.canvas-bridge');
const rangeBridge = document.querySelector('.range-bridge');
const colorBridge = document.querySelector('.color-bridge');
const buttonCleanBridge = document.querySelector('.button-clean-bridge');

rangeBridge.addEventListener('input', event => {
  const width = event.target.value;
  const height = event.target.value;
  const color = colorBridge.value;
  editor.print(width, height, color);
});

colorBridge.addEventListener('input', event => {
  const width = rangeBridge.value;
  const height = rangeBridge.value;
  const color = event.target.value;
  editor.print(width, height, color);
});

buttonCleanBridge.addEventListener('click', () => {
  rangeBridge.value = 1;
  colorBridge.value = '#000000';
  editor.clean();
});

// const editor = new Editor(new HtmlPainter(contentBridge));
const editor = new EditorWithClean(new HtmlPainter(contentBridge));
// const editor = new Editor(new CanvasPainter(canvasBridge));
// const editor = new EditorWithClean(new CanvasPainter(canvasBridge));
