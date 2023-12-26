class Weekdays {
  daysEs = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
  ];

  daysEn = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  constructor(lang) {
    this.lang = lang;

    if (Weekdays.instance) {
      return Weekdays.instance
    }

    Weekdays.instance = this;
  }

  getDays = function () {
    if (this.lang === 'en') {
      return this.daysEn
    }

    return this.daysEs
  }
}
const weekdays = new Weekdays('en')
const weekdays2 = new Weekdays()
console.log(weekdays.getDays())
console.log(weekdays2.getDays())
