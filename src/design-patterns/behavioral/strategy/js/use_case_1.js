const cars = [
  {
    name: 'Toyota',
    country: 'Japón',
    info: 'Carro eficiente y confiable',
    img: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_fb5df7a147924716a6c6c3e045e18443.jpg'
  },
  {
    name: 'Ford',
    country: 'Estados Unidos',
    info: 'Carro potente y resistente',
    img: 'https://www.c3carecarcenter.com/wp-content/uploads/2021/03/FORD-ESCAPE.jpg?quality=100.3015072922390'
  },
  {
    name: 'Volkswagen',
    country: 'Alemania',
    info: 'Carro elegante y moderno',
    img: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_954423484bfa4837a2348a759b5cf69e.jpg'
  },
  {
    name: 'Hyundai',
    country: 'Corea del Sur',
    info: 'Carro con tecnología avanzada',
    img: 'https://www.diariomotor.com/imagenes/2015/06/hyundai-creta-2015-05-1440px-1400x637.webp'
  },
  {
    name: 'Honda',
    country: 'Japón',
    info: 'Carro deportivo y ágil',
    img: 'https://www.honda.mx/web/img/cars/models/crv/2023/colors/blanco.png'
  }
];



class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.data, this.element)
  }
}

class ListStrategy {
  show(data, element) {
    const listData = data.reduce((acc, car) => {
      return acc + `
        <div>
          <h2>${car.name}</h2>
          <p>${car.country}</p>
        </div>
        <hr>
      `
    }, '')

    return element.innerHTML = listData;
  }
}

class DetailsListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, car) => {
      return acc + `
        <div>
          <h2>${car.name}</h2>
          <img src="${car.img}" height="200" />
          <p>${car.country}</p>
          <p>${car.info}</p>
        </div>
        <hr>
      `
    }, '')
  }
}

class ImageListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, car) => {
      return acc + `
        <div>
          <h2>${car.name}</h2>
          <img src="${car.img}" height="200" />
        </div>
        <hr>
      `
    }, '')
  }
}


const element = document.querySelector('.contentStrategy')
const strategies = [
  new ListStrategy(),
  new DetailsListStrategy(),
  new ImageListStrategy()
]
const listStrategy = new ListStrategy()
const info = new InfoContext(listStrategy, cars, element)

function handlerFormatChange(event){
  const format = event.target.value;
  info.setStrategy(strategies[format])
  info.show()
}

document.querySelector('.info-format').addEventListener('change', handlerFormatChange)

info.show()