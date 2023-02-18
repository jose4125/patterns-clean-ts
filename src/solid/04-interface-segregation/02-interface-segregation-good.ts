(()=> {
    interface IDrawable {
        draw(): void
    }
    interface IDrawable2D {
        calculateArea(): number
    }

    class Shape implements IDrawable{
        constructor(public name: string){}
        draw(){}
    }

    class Circle implements IDrawable, IDrawable2D {
        constructor(public name: string, public radius:number) {}
        draw(){}
        calculateArea() {
            return Math.PI * this.radius * this.radius
        }
    }

    class Line implements IDrawable {
        constructor(public name: string, private pointA: {}, private pointB: {}) {}
        draw(){}
    }

    function shapeStats(shapes) {
        console.log('Shape stats: ')
        for(let shape of shapes) {
            console.log(`${shape.name} has area of ${shape.calculateArea} cm^2`)
        }
    }
    
    let shapes = [
        new Circle('Circle A', 2),
        new Circle('Circle B', 4),
        new Circle('Circle C', 5),
        new Line('Line A', {x: 1, y: 1}, {x: 6, y: 7}),
    ] 

    shapeStats(shapes)



})()