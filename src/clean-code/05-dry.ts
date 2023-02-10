type Size = ''  | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ){}

    isProductReady(): boolean {
        for(const key in this) {
            switch(typeof this[key]){
                case 'string':
                    const keyStringProperty = this[key] as string
                    if(!keyStringProperty.length) throw Error(`${key} is empty`)
                    break
                case 'number':
                    const keyNumberProperty = this[key] as number
                    if(keyNumberProperty <= 0) throw Error(`${key} is zero`)
                    break

                default:
                    throw Error(`${typeof this[key]} is not valid`)
            }
        }

        return true
    }

    toString() {
        // bad
        // if(!this.name.length) throw new Error('name is empty')
        // if(this.price <= 0) throw new Error('price is zero')
        // if(!this.size) throw new Error('size is empty')

        // good
        if(!this.isProductReady()) return

        return `${this.name} (${this.price}), ${this.size}`
    }
}

(() => {
    
    const bluePants = new Product('Blue Large Pants', 5, 'S')
    console.log(bluePants.toString())
})()