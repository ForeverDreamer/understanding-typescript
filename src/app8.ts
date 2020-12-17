// 08 Decorators


// 105 A First Class Decorator
// 106 Working with Decorator Factories
// 107 Building More Useful Decorators
// 108 Adding Multiple Decorators
// 112 Returning (and changing) a Class in a Class Decorator

// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }

function Logger(logString: string) {
    console.log('LOGGER FACTORY')
    return function Logger(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function withTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY')
    // return function (_: Function) {
    return function (constructor: any) {
        console.log('Rendering template')
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

// @Logger
// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@withTemplate('<h1>My Person Object</h1>', 'app')
class Person1 {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

// const person1 = new Person1();
//
// console.log(person1);

// 109 Diving into Property Decorators
// 110 Accessor & Parameter Decorators

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target);
    console.log(propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor)
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor)
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position)
}

class Product {
    @Log
    title: string;
    private _price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!')
        }
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}



