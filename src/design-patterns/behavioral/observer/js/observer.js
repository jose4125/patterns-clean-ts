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


class Observer {
  constructor(fn) {
    this.fn = fn
  }

  refresh(data) {
    this.fn(data)
  }
}

const s = new Subject()
const o1 = new Observer(data => {
  console.log('hi! this is the o1:', data)
})
const o2 = new Observer(data => {
  document.querySelector('.div1').innerHTML = `this is the o2: ${data}`
})
const o3 = new Observer(data => {
  document.querySelector('.div2').innerHTML = `this is the o3: ${data}`
})

s.subscribe(o1)
s.subscribe(o2)
s.subscribe(o3)

setTimeout(function() {
  s.unsubscribe(o1)
}, 5000)

document.querySelector('.message').addEventListener('keyup', function(event) {
  s.notify(event.target.value)
})