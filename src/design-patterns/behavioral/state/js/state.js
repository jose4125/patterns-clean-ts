class DocumentContext {
  constructor() {
    this.content = ''
    this.state = new BlankState()
  }

  setState(state) {
    this.state = state
  }

  write(text) {
    this.state.write(this, text)
  }
}

class BlankState {
  write(documentContext, text) {
    documentContext.content = text
    documentContext.setState(new WithContentState())
  }
}

class WithContentState {
  write(documentContext, text) {
    documentContext.content += ' ' + text;
    documentContext.setState(new WithContentState())

  }
}

class ApprovedState {
  write() {
    console.warn('Document was approved. You are not been able to modify it');
  }
}

const doc = new DocumentContext()
console.log('=== doc state', doc.state)
doc.write('Hello')
console.log('=== doc state', doc.state)
console.log('=== doc content', doc.content)
doc.write('world')
doc.write('!!!')
console.log('=== doc content', doc.content)
doc.setState(new ApprovedState())
console.log('=== doc state', doc.state)
doc.write('bye')
doc.setState(new WithContentState())
doc.write(', dude')
console.log('=== doc state', doc.state)
console.log('=== doc content', doc.content)