class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  notify(data) {
    this.observers.forEach(obs => {
      obs.refresh(data)
    })
  }
}


class ItemSubject {
  constructor() {
    this.subject = new Subject()
    this.data = []
  }

  add(item) {
    this.data.push(item)
    this.subject.notify(this.data)
  }

  subscribe(observer) {
    this.subject.subscribe(observer)
  }
}

class Observer {
  constructor(fn) {
    this.fn = fn
  }

  refresh(data) {
    this.fn(data)
  }
}


class HtmlElementObserver {
  constructor(element) {
    this.element = element
  }

  refresh(data) {
    this.element.innerHTML = data.reduce((acc, name) => {
      return acc + `<p>${name}</p>`
    }, '')
  }
}

const items = new ItemSubject()
const name1El = document.querySelector('.name1')
const name2El = document.querySelector('.name2')
const name3El = document.querySelector('.name3')
const name1Observer = new HtmlElementObserver(name1El)
const name2Observer = new HtmlElementObserver(name2El)
const name3Observer = new Observer((data) => {
  name3El.innerHTML = data.length
})

items.subscribe(name1Observer)
items.subscribe(name2Observer)
items.subscribe(name3Observer)

document.querySelector('.addBtn').addEventListener('click', () => {
  const name = document.querySelector('.name')
  items.add(name.value)
})